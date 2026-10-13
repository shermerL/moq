/** Sweep announced request followers against routes for one restart of a watched or unrelated path. */
import { Producer } from "../src/origin";
import * as Path from "../src/path";
import { wireOf } from "../src/wire";

const settle = () => new Promise<void>((resolve) => setImmediate(resolve));
console.log("touched,routes,followers,update_us");
for (const touched of ["watched", "unrelated"])
	for (const routes of [8, 32, 128])
		for (const followers of [1, 8, 32]) {
			const origin = new Producer();
			const path = Path.from("room/0");
			const broadcasts = Array.from({ length: routes }, (_, i) => {
				const broadcast = origin.createBroadcast(Path.from(`room/${i}`));
				broadcast.announce();
				return broadcast;
			});
			const requests = Array.from({ length: followers }, () => origin.request(path, { announced: true }));
			await settle();
			let current = broadcasts[0];
			let unrelated: (typeof broadcasts)[number] | undefined;
			const samples: number[] = [];
			for (let round = 0; round < 6; round++) {
				const start = performance.now();
				for (let i = 0; i < 128; i++) {
					const next = origin.createBroadcast(touched === "watched" ? path : Path.from("other"));
					next.announce();
					if (touched === "watched") {
						current.close();
						current = next;
					} else {
						unrelated?.close();
						unrelated = next;
					}
					await settle();
					for (const request of requests)
						if (request.active.peek()?.closed !== current.closed)
							throw new Error("wrong publisher instance");
				}
				if (round > 0) samples.push(((performance.now() - start) * 1000) / 128);
			}
			samples.sort((a, b) => a - b);
			console.log(`${touched},${routes},${followers},${samples[2].toFixed(2)}`);
			for (const request of requests) request.close();
			current.close();
			unrelated?.close();
			for (const broadcast of broadcasts) broadcast.close();
			origin.close();
		}

// Cancelling a touched path must not scan all the origin's unrelated requests.
// Keep a second axis for the waiters sharing that path, which legitimately must exit.
console.log("unrelated,waiters,cancel_us");
for (const unrelated of [8, 128, 2048])
	for (const waiters of [1, 8, 32]) {
		const origin = new Producer();
		origin.dynamic(Path.from("pending"));
		const held = Array.from({ length: unrelated }, (_, i) => origin.request(Path.from(`pending/${i}`)));
		const wire = wireOf(origin.consume());
		const samples: number[] = [];
		for (let round = 0; round < 7; round++) {
			const holds = Array.from({ length: waiters }, () => new AbortController());
			const demands = holds.map((hold) =>
				wire.demand(Path.from("pending/touched"), undefined, hold.signal).catch(() => {}),
			);
			const start = performance.now();
			for (const hold of holds) hold.abort();
			await Promise.all(demands);
			if (round > 0) samples.push((performance.now() - start) * 1000);
		}
		samples.sort((a, b) => a - b);
		console.log(`${unrelated},${waiters},${samples[3].toFixed(2)}`);
		for (const request of held) request.close();
		origin.close();
	}
