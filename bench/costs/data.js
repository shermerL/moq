window.BENCHMARK_DATA = {
  "lastUpdate": 1792933444494,
  "repoUrl": "https://github.com/shermerL/moq",
  "entries": {
    "MoQ nightly costs": [
      {
        "commit": {
          "author": {
            "name": "Luke Curley",
            "username": "kixelated",
            "email": "kixelated@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1086539c685e65f9f2c7365f41b79cf465b6dcdc",
          "message": "fix(quic): stop counting an unanswered handshake as active once it closes (#6201)\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-21T22:46:24Z",
          "url": "https://github.com/shermerL/moq/commit/1086539c685e65f9f2c7365f41b79cf465b6dcdc"
        },
        "date": 1792678531500,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=0/ns_per_handle_write",
            "value": 558,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=256/ns_per_handle_write",
            "value": 281,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=4096/ns_per_handle_write",
            "value": 549,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=0/ns_per_handle_write",
            "value": 222,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=256/ns_per_handle_write",
            "value": 148,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=4096/ns_per_handle_write",
            "value": 166,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=0/ns_per_handle_write",
            "value": 159,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=256/ns_per_handle_write",
            "value": 108,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=4096/ns_per_handle_write",
            "value": 122,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=0ms/ns_per_callback",
            "value": 435.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=80ms/ns_per_callback",
            "value": 196.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=0ms/ns_per_callback",
            "value": 88.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=80ms/ns_per_callback",
            "value": 84.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=0ms/ns_per_callback",
            "value": 67.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=80ms/ns_per_callback",
            "value": 67.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=0ms/ns_per_callback",
            "value": 35.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=80ms/ns_per_callback",
            "value": 38.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=0ms/ns_per_callback",
            "value": 34.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=80ms/ns_per_callback",
            "value": 33.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=0ms/ns_per_callback",
            "value": 32.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=80ms/ns_per_callback",
            "value": 49.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=0ms/ns_per_callback",
            "value": 30.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=80ms/ns_per_callback",
            "value": 39.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=0ms/ns_per_callback",
            "value": 37.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=80ms/ns_per_callback",
            "value": 48.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=0ms/ns_per_callback",
            "value": 29.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=80ms/ns_per_callback",
            "value": 30.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=1/update_us",
            "value": 376.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=8/update_us",
            "value": 779.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=32/update_us",
            "value": 2379.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=1/update_us",
            "value": 337.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=8/update_us",
            "value": 1884.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=32/update_us",
            "value": 6499.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=1/update_us",
            "value": 869.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=8/update_us",
            "value": 6790,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=32/update_us",
            "value": 24061,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=1/update_us",
            "value": 85.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=8/update_us",
            "value": 374.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=32/update_us",
            "value": 1380.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=1/update_us",
            "value": 197.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=8/update_us",
            "value": 1284.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=32/update_us",
            "value": 4640.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=1/update_us",
            "value": 627.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=8/update_us",
            "value": 4438.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=32/update_us",
            "value": 16939.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=1/update_us",
            "value": 53.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=8/update_us",
            "value": 347.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=32/update_us",
            "value": 1315.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=1/update_us",
            "value": 180.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=8/update_us",
            "value": 1139.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=32/update_us",
            "value": 4459.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=1/update_us",
            "value": 646.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=8/update_us",
            "value": 4357.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=32/update_us",
            "value": 17145.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=1/update_us",
            "value": 64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=8/update_us",
            "value": 403,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=32/update_us",
            "value": 1409.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=1/update_us",
            "value": 184.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=8/update_us",
            "value": 1529.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=32/update_us",
            "value": 4779.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=1/update_us",
            "value": 652.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=8/update_us",
            "value": 4928.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=32/update_us",
            "value": 18390.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=1/demand_update_us",
            "value": 15.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=8/demand_update_us",
            "value": 14.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=32/demand_update_us",
            "value": 6.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=1/demand_update_us",
            "value": 5.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=8/demand_update_us",
            "value": 6.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=32/demand_update_us",
            "value": 5.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=1/demand_update_us",
            "value": 13.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=8/demand_update_us",
            "value": 12.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=32/demand_update_us",
            "value": 11.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=1/update_and_read_us",
            "value": 54.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=8/update_and_read_us",
            "value": 76.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=32/update_and_read_us",
            "value": 102.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=1/update_and_read_us",
            "value": 28.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=8/update_and_read_us",
            "value": 37.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=32/update_and_read_us",
            "value": 40.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=1/update_and_read_us",
            "value": 129.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=8/update_and_read_us",
            "value": 56.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=32/update_and_read_us",
            "value": 40.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=1/update_and_read_us",
            "value": 16.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=8/update_and_read_us",
            "value": 10.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=32/update_and_read_us",
            "value": 23.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=1/update_and_read_us",
            "value": 69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=8/update_and_read_us",
            "value": 14.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=32/update_and_read_us",
            "value": 22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=1/update_and_read_us",
            "value": 23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=8/update_and_read_us",
            "value": 30.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=32/update_and_read_us",
            "value": 191.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=1/grant_update_us",
            "value": 4.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=8/grant_update_us",
            "value": 25.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=32/grant_update_us",
            "value": 78.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=1/grant_update_us",
            "value": 9.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=8/grant_update_us",
            "value": 70.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=32/grant_update_us",
            "value": 276.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=1/grant_update_us",
            "value": 33.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=8/grant_update_us",
            "value": 271.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=32/grant_update_us",
            "value": 1129.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=1/update_us",
            "value": 474.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=8/update_us",
            "value": 112.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=32/update_us",
            "value": 88.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=1/update_us",
            "value": 267,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=8/update_us",
            "value": 233.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=32/update_us",
            "value": 306.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=1/update_us",
            "value": 689,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=8/update_us",
            "value": 521.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=32/update_us",
            "value": 565.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=8/update_and_consume_us",
            "value": 2.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=32/update_and_consume_us",
            "value": 3.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=128/update_and_consume_us",
            "value": 9.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=8/update_and_consume_us",
            "value": 1.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=32/update_and_consume_us",
            "value": 1.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=128/update_and_consume_us",
            "value": 1.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=8/update_and_consume_us",
            "value": 1.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=32/update_and_consume_us",
            "value": 2.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=128/update_and_consume_us",
            "value": 1.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=1/duplicates=0/select_us",
            "value": 4.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=8/duplicates=0/select_us",
            "value": 17.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=32/duplicates=0/select_us",
            "value": 56.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=1/duplicates=0/select_us",
            "value": 1.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=8/duplicates=0/select_us",
            "value": 29.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=32/duplicates=0/select_us",
            "value": 60.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=1/duplicates=0/select_us",
            "value": 2.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=8/duplicates=0/select_us",
            "value": 13.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=32/duplicates=0/select_us",
            "value": 69.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=1/stale=0/invalidate_us",
            "value": 4.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=8/stale=0/invalidate_us",
            "value": 18.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=32/stale=0/invalidate_us",
            "value": 75.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=1/stale=0/invalidate_us",
            "value": 2.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=8/stale=0/invalidate_us",
            "value": 13.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=32/stale=0/invalidate_us",
            "value": 223.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=1/stale=0/invalidate_us",
            "value": 2.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=8/stale=0/invalidate_us",
            "value": 12.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=32/stale=0/invalidate_us",
            "value": 65.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=1/refused=256/retire_us",
            "value": 4.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=8/refused=2048/retire_us",
            "value": 24.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=32/refused=8192/retire_us",
            "value": 87.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=1/refused=256/retire_us",
            "value": 5.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=8/refused=2048/retire_us",
            "value": 22.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=32/refused=8192/retire_us",
            "value": 85.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=1/refused=256/retire_us",
            "value": 11.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=8/refused=2048/retire_us",
            "value": 28.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=32/refused=8192/retire_us",
            "value": 96.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=1/update_us",
            "value": 1055.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=8/update_us",
            "value": 133.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=32/update_us",
            "value": 248.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=1/update_us",
            "value": 119.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=8/update_us",
            "value": 228.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=32/update_us",
            "value": 880.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=1/update_us",
            "value": 134.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=8/update_us",
            "value": 774.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=32/update_us",
            "value": 2665.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=1/catalog_publishes=2/subscribe_updates=2/unlimited_subscribe_updates=1000/elapsed_ms",
            "value": 52.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=4/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 38.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=16/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 37.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=1/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 50.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=4/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 50.9,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=16/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 50.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=1/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=4/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 116.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=16/catalog_publishes=2/subscribe_updates=512/unlimited_subscribe_updates=256000/elapsed_ms",
            "value": 123.7,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=1/arm_us",
            "value": 193.69299999999967,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=1/advance_us",
            "value": 5.031999999999925,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=1/cancel_us",
            "value": 226.04299999999887,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=10/arm_us",
            "value": 98.39399999999898,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=10/advance_us",
            "value": 9.263000000000687,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=10/cancel_us",
            "value": 149.2079999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=100/arm_us",
            "value": 81.9390000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=100/advance_us",
            "value": 37.25299999999976,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=100/ready=100/cancel_us",
            "value": 72.22800000000085,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1/arm_us",
            "value": 731.8929999999995,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1/advance_us",
            "value": 6.496000000005608,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1614.1390000000015,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=10/arm_us",
            "value": 694.3279999999987,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=10/advance_us",
            "value": 14.079000000002395,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1494.025999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=100/arm_us",
            "value": 671.168999999999,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=100/advance_us",
            "value": 66.97999999999382,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1347.7299999999987,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 660.7699999999994,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 331.1329999999941,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 661.5299999999991,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1/arm_us",
            "value": 9351.621000000023,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1/advance_us",
            "value": 10.16000000001327,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 20813.344999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=10/arm_us",
            "value": 9209.213000000034,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=10/advance_us",
            "value": 25.862000000017815,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 22354.232000000025,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=100/arm_us",
            "value": 9275.82499999994,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=100/advance_us",
            "value": 143.82399999999507,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 22540.910000000054,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 9226.067999999941,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 754.5330000000376,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 17477.832000000035,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=1/arm_us",
            "value": 59.16499999989355,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=1/advance_us",
            "value": 0.45599999998557905,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=1/cancel_us",
            "value": 28.07800000005045,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=10/arm_us",
            "value": 55.605000000014115,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=10/advance_us",
            "value": 2.83999999999196,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=10/cancel_us",
            "value": 24.910999999974592,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=100/arm_us",
            "value": 56.83699999997316,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=100/advance_us",
            "value": 22.614999999973406,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=100/ready=100/cancel_us",
            "value": 1.472000000035223,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1784.4109999999773,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1/advance_us",
            "value": 3.1680000000733344,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 386.2260000000788,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1766.9329999999945,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=10/advance_us",
            "value": 9.815000000003238,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 379.1550000000825,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1837.7450000000408,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=100/advance_us",
            "value": 63.16399999991518,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 358.2120000000941,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1791.1390000000438,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 390.4899999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 10.111000000051718,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1/arm_us",
            "value": 298292.351,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1/advance_us",
            "value": 13.04800000002615,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13408.379999999852,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=10/arm_us",
            "value": 293219.462,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=10/advance_us",
            "value": 50.62100000031933,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13517.758999999842,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=100/arm_us",
            "value": 296571.31999999913,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=100/advance_us",
            "value": 335.63800000047195,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 13584.010999999919,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 302779.85900000023,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 2755.0529999998616,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10949.97500000045,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/seal_us",
            "value": 36.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/open_us",
            "value": 34.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/seal_us",
            "value": 35.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/open_us",
            "value": 35.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/seal_us",
            "value": 36.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/open_us",
            "value": 34.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/seal_us",
            "value": 39.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/open_us",
            "value": 35.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/seal_us",
            "value": 39.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/open_us",
            "value": 35.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/seal_us",
            "value": 39.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/open_us",
            "value": 36.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/seal_us",
            "value": 65.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/open_us",
            "value": 51.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/seal_us",
            "value": 58.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/open_us",
            "value": 50.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/seal_us",
            "value": 61.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/open_us",
            "value": 51.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/seal_us",
            "value": 226.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/open_us",
            "value": 239.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/seal_us",
            "value": 186.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/open_us",
            "value": 230.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/seal_us",
            "value": 316.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/open_us",
            "value": 228.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=8/update_us",
            "value": 299.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=32/update_us",
            "value": 444.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=128/update_us",
            "value": 856,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=8/update_us",
            "value": 108,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=32/update_us",
            "value": 206.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=128/update_us",
            "value": 778,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=8/update_us",
            "value": 185.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=32/update_us",
            "value": 290.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=128/update_us",
            "value": 773.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=8/update_us",
            "value": 92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=32/update_us",
            "value": 232.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=128/update_us",
            "value": 689.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=8/update_us",
            "value": 78.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=32/update_us",
            "value": 182.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=128/update_us",
            "value": 682.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=8/update_us",
            "value": 82.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=32/update_us",
            "value": 197.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=128/update_us",
            "value": 696.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=1/watch_us",
            "value": 66.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=8/watch_us",
            "value": 133.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=32/watch_us",
            "value": 391.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=1/watch_us",
            "value": 54.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=8/watch_us",
            "value": 136.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=32/watch_us",
            "value": 438.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=1/watch_us",
            "value": 54.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=8/watch_us",
            "value": 187.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=32/watch_us",
            "value": 515.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/ns_per_frame",
            "value": 5204,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/first_frame_us",
            "value": 10.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 1018,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 31.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1008,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 30.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1037,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 33.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 6539,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 13.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1452,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 17.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 989,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 34.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 990,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 32.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 7404,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 11.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 6579,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 15.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1640,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 23.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 968,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 32.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 801,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1460.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/ns_per_frame",
            "value": 14380,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/first_frame_us",
            "value": 84.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 2232,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 75.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1989,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 77.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1854,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 68.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 18188,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 60.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 2535,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 59.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 2028,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 84.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1843,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 76.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 19871,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 55.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 18693,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 61.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 2727,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 69.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1637,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 61.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 758,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1349.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=1/acquire+release",
            "value": 0.101,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=16/acquire+release",
            "value": 0.088,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=256/acquire+release",
            "value": 0.086,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=1/acquire+release",
            "value": 0.085,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=16/acquire+release",
            "value": 0.107,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=256/acquire+release",
            "value": 0.097,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=1/acquire+release",
            "value": 0.072,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=16/acquire+release",
            "value": 0.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=256/acquire+release",
            "value": 0.098,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=none/ms_per_update",
            "value": 0.005465,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=deflate/ms_per_update",
            "value": 0.090319,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=none/ms_per_update",
            "value": 0.004755,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=deflate/ms_per_update",
            "value": 0.065687,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=none/ms_per_update",
            "value": 0.004847,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=deflate/ms_per_update",
            "value": 0.091779,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=none/ms_per_update",
            "value": 0.022385,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=deflate/ms_per_update",
            "value": 0.076674,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=none/ms_per_update",
            "value": 0.022623,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=deflate/ms_per_update",
            "value": 0.091693,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=none/ms_per_update",
            "value": 0.673899,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=deflate/ms_per_update",
            "value": 0.753342,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=none/ms_per_update",
            "value": 0.685011,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=deflate/ms_per_update",
            "value": 0.771254,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/json_parse_us",
            "value": 2.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/parse_us",
            "value": 4.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/json_parse_us",
            "value": 2.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/parse_us",
            "value": 4.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/json_parse_us",
            "value": 24.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/parse_us",
            "value": 41.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/json_parse_us",
            "value": 354.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/parse_us",
            "value": 547.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=none/ns_per_record",
            "value": 3718.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 62324.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=none/ns_per_record",
            "value": 6173,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 40811,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=none/ns_per_record",
            "value": 1218.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 33643,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=none/ns_per_record",
            "value": 3036.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 26575.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/encode_ns",
            "value": 68118,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/decode_ns",
            "value": 9352,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/encode_ns",
            "value": 66573,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/decode_ns",
            "value": 9778,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/encode_ns",
            "value": 56944,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/decode_ns",
            "value": 7738,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/encode_ns",
            "value": 56092,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/decode_ns",
            "value": 7945,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/encode_ns",
            "value": 6557,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/decode_ns",
            "value": 2062,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/encode_ns",
            "value": 6901,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/decode_ns",
            "value": 2007,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/encode_ns",
            "value": 16112,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/decode_ns",
            "value": 5247,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/encode_ns",
            "value": 17995,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/decode_ns",
            "value": 5936,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/encode_ns",
            "value": 2710,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/decode_ns",
            "value": 1710,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/encode_ns",
            "value": 2722,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/decode_ns",
            "value": 1697,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/encode_ns",
            "value": 12031,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/decode_ns",
            "value": 5357,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/encode_ns",
            "value": 11966,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/decode_ns",
            "value": 5086,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=0/held_estimates=1/update_us",
            "value": 14.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=1/held_estimates=1/update_us",
            "value": 10.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=8/held_estimates=1/update_us",
            "value": 29.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=64/held_estimates=1/update_us",
            "value": 130.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=0/held_estimates=32/update_us",
            "value": 11.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=1/held_estimates=32/update_us",
            "value": 14.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=8/held_estimates=32/update_us",
            "value": 26.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=64/held_estimates=32/update_us",
            "value": 135.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=0/held_estimates=256/update_us",
            "value": 11.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=1/held_estimates=256/update_us",
            "value": 14.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=8/held_estimates=256/update_us",
            "value": 27.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=64/held_estimates=256/update_us",
            "value": 154.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=0/held_estimates=0/update_us",
            "value": 4.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=1/held_estimates=1/update_us",
            "value": 13.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=8/held_estimates=1/update_us",
            "value": 33.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=64/held_estimates=1/update_us",
            "value": 192.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=0/held_estimates=0/update_us",
            "value": 3.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=1/held_estimates=32/update_us",
            "value": 11.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=8/held_estimates=32/update_us",
            "value": 30.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=64/held_estimates=32/update_us",
            "value": 201.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=0/held_estimates=0/update_us",
            "value": 3.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=1/held_estimates=256/update_us",
            "value": 11.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=8/held_estimates=256/update_us",
            "value": 30.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=64/held_estimates=256/update_us",
            "value": 172.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=1024/records=3/elapsed_ms",
            "value": 4.753,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=16384/records=4/elapsed_ms",
            "value": 0.875,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=262144/records=19/elapsed_ms",
            "value": 2.832,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=1024/records=17/elapsed_ms",
            "value": 2.081,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=16384/records=25/elapsed_ms",
            "value": 2.824,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=262144/records=145/elapsed_ms",
            "value": 12.993,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=1024/records=129/elapsed_ms",
            "value": 6.918,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=16384/records=193/elapsed_ms",
            "value": 9.269,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=262144/records=1154/elapsed_ms",
            "value": 55.734,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=4/ns_per_change",
            "value": 6728.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=16/ns_per_change",
            "value": 6660.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=64/ns_per_change",
            "value": 23115.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=4/ns_per_change",
            "value": 305.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=16/ns_per_change",
            "value": 2466.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=64/ns_per_change",
            "value": 15925.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=4/ns_per_change",
            "value": 230.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=16/ns_per_change",
            "value": 1459.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=64/ns_per_change",
            "value": 15468.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1200/chunks=14/ns_per_byte",
            "value": 1.271,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=16384/chunks=1/ns_per_byte",
            "value": 0.16,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.064,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1200/chunks=219/ns_per_byte",
            "value": 0.496,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=16384/chunks=16/ns_per_byte",
            "value": 0.494,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1200/chunks=874/ns_per_byte",
            "value": 0.431,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=16384/chunks=64/ns_per_byte",
            "value": 0.234,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.002,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=1/refresh_us",
            "value": 381.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=8/refresh_us",
            "value": 537.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=32/refresh_us",
            "value": 766.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=1/refresh_us",
            "value": 232.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=8/refresh_us",
            "value": 266.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=32/refresh_us",
            "value": 612.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=1/refresh_us",
            "value": 158.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=8/refresh_us",
            "value": 232.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=32/refresh_us",
            "value": 500.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=1/refresh_us",
            "value": 326.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=8/refresh_us",
            "value": 947.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=32/refresh_us",
            "value": 2624.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=1/refresh_us",
            "value": 279.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=8/refresh_us",
            "value": 777.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=32/refresh_us",
            "value": 2483.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=1/refresh_us",
            "value": 262.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=8/refresh_us",
            "value": 802.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=32/refresh_us",
            "value": 2555.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=1/refresh_us",
            "value": 6137.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=8/refresh_us",
            "value": 47506.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=32/refresh_us",
            "value": 191593.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=1/refresh_us",
            "value": 5962.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=8/refresh_us",
            "value": 42718.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=32/refresh_us",
            "value": 191517.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=1/refresh_us",
            "value": 6260.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=8/refresh_us",
            "value": 47558.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=32/refresh_us",
            "value": 194624.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 3.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 25.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 68005.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 6.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 112.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 443402.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 21.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 296.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 1507363.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 6.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 49.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 104908.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 18.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 353.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 814531.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 66.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1063.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 3017036.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=8/accepted=8/admit_us",
            "value": 3.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=128/accepted=128/admit_us",
            "value": 48.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 156310.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=8/accepted=64/admit_us",
            "value": 17.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 360.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 1283374.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=8/accepted=256/admit_us",
            "value": 72.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1392.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 5257366.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 1.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 17.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 20098,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 5.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 88.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 109309.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 16.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 259.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 434544.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 3.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 45.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 77257.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 17.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 303.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 541712.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 75.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1166.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 2148941.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 2.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 55.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 139254.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 18.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 374.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 1143287.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 74.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1731.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 5183050.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=1/update_us",
            "value": 36.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=8/update_us",
            "value": 57.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=32/update_us",
            "value": 120.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=1/update_us",
            "value": 33.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=8/update_us",
            "value": 44.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=32/update_us",
            "value": 110.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=1/update_us",
            "value": 52.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=8/update_us",
            "value": 72.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=32/update_us",
            "value": 142.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=1/update_us",
            "value": 15.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=8/update_us",
            "value": 15.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=32/update_us",
            "value": 17.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=1/update_us",
            "value": 21.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=8/update_us",
            "value": 21.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=32/update_us",
            "value": 21.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=1/update_us",
            "value": 39.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=8/update_us",
            "value": 41.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=32/update_us",
            "value": 38.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=1/cancel_us",
            "value": 21.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=8/cancel_us",
            "value": 89.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=32/cancel_us",
            "value": 149.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=1/cancel_us",
            "value": 7.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=8/cancel_us",
            "value": 40.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=32/cancel_us",
            "value": 131.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=1/cancel_us",
            "value": 7.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=8/cancel_us",
            "value": 53.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=32/cancel_us",
            "value": 112.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=0/cancel_us",
            "value": 3.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=128/cancel_us",
            "value": 4.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=0/cancel_us",
            "value": 2.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=128/cancel_us",
            "value": 4.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=0/cancel_us",
            "value": 3.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=128/cancel_us",
            "value": 5.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=0/cancel_us",
            "value": 15.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=128/cancel_us",
            "value": 15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/active_ms",
            "value": 3.37,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/settled_ms",
            "value": 5.23,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/active_ms",
            "value": 11.68,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/settled_ms",
            "value": 20.27,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/active_ms",
            "value": 18.64,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/settled_ms",
            "value": 26.32,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/active_ms",
            "value": 47.73,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/settled_ms",
            "value": 78.01,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/active_ms",
            "value": 68.87,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/settled_ms",
            "value": 100.77,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/active_ms",
            "value": 166.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/settled_ms",
            "value": 292.21,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/active_ms",
            "value": 4.17,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/settled_ms",
            "value": 6.17,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/active_ms",
            "value": 12.54,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/settled_ms",
            "value": 18.56,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/active_ms",
            "value": 19.02,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/settled_ms",
            "value": 24.94,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/active_ms",
            "value": 50.54,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/settled_ms",
            "value": 79.99,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/active_ms",
            "value": 84.46,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/settled_ms",
            "value": 110.68,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/active_ms",
            "value": 227.49,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/settled_ms",
            "value": 345.45,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/active_ms",
            "value": 4.34,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/settled_ms",
            "value": 4.35,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/active_ms",
            "value": 4.99,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/settled_ms",
            "value": 5,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/active_ms",
            "value": 12.13,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/settled_ms",
            "value": 12.13,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/active_ms",
            "value": 13.37,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/settled_ms",
            "value": 13.37,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/active_ms",
            "value": 54.54,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/settled_ms",
            "value": 54.55,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/active_ms",
            "value": 82.52,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/settled_ms",
            "value": 82.53,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/active_us",
            "value": 8.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/settled_us",
            "value": 15.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/active_us",
            "value": 107.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/settled_us",
            "value": 212.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/active_us",
            "value": 2113.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/settled_us",
            "value": 3574.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/active_us",
            "value": 9.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/settled_us",
            "value": 16.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/active_us",
            "value": 143.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/settled_us",
            "value": 244.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/active_us",
            "value": 2297,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/settled_us",
            "value": 4104.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/active_us",
            "value": 21.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/settled_us",
            "value": 34.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/active_us",
            "value": 139,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/settled_us",
            "value": 244.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/active_us",
            "value": 2870.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/settled_us",
            "value": 4491.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/active_us",
            "value": 5.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/settled_us",
            "value": 11.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/active_us",
            "value": 128.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/settled_us",
            "value": 223.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/active_us",
            "value": 2345.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/settled_us",
            "value": 4030.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/active_us",
            "value": 5.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/settled_us",
            "value": 12.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/active_us",
            "value": 130.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/settled_us",
            "value": 223.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/active_us",
            "value": 2575.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/settled_us",
            "value": 4375.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/active_us",
            "value": 10.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/settled_us",
            "value": 22.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/active_us",
            "value": 128.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/settled_us",
            "value": 228.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/active_us",
            "value": 2437.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/settled_us",
            "value": 4358.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=1/update_us",
            "value": 584.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=8/update_us",
            "value": 1214.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=1/update_us",
            "value": 1535.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=8/update_us",
            "value": 9778.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=1/update_us",
            "value": 4820.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=8/update_us",
            "value": 32278.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=1/update_us",
            "value": 89.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=8/update_us",
            "value": 601.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=1/update_us",
            "value": 1091.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=8/update_us",
            "value": 8168.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=1/update_us",
            "value": 4429.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=8/update_us",
            "value": 34829.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/direct_us",
            "value": 14.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/front_us",
            "value": 24.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/fork_us",
            "value": 22.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/direct_us",
            "value": 15.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/front_us",
            "value": 34.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/fork_us",
            "value": 34.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/direct_us",
            "value": 26.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/front_us",
            "value": 41.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/fork_us",
            "value": 45.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/direct_us",
            "value": 12.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/front_us",
            "value": 30.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/fork_us",
            "value": 31.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/direct_us",
            "value": 14.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/front_us",
            "value": 44.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/fork_us",
            "value": 53.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/direct_us",
            "value": 27.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/front_us",
            "value": 53.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/fork_us",
            "value": 56.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/direct_us",
            "value": 12.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/front_us",
            "value": 42.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/fork_us",
            "value": 43.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/direct_us",
            "value": 14.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/front_us",
            "value": 48.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/fork_us",
            "value": 48.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/direct_us",
            "value": 26.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/front_us",
            "value": 72.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/fork_us",
            "value": 72.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=0/readable_us",
            "value": 6.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=0/readable_us",
            "value": 4.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=0/readable_us",
            "value": 3.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1/readable_us",
            "value": 4.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1/readable_us",
            "value": 3.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1/readable_us",
            "value": 2.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=64/readable_us",
            "value": 11.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=64/readable_us",
            "value": 6.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=64/readable_us",
            "value": 3.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1024/readable_us",
            "value": 85.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1024/readable_us",
            "value": 53.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1024/readable_us",
            "value": 52.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/signals/op=new-error/ns_per_op",
            "value": 293,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-close/ns_per_op",
            "value": 2619,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-get-close/ns_per_op",
            "value": 2802,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/slow-group/groups=1/warnings=1/bytes=51/catchup_ms",
            "value": 2.364,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=16/warnings=1/bytes=53/catchup_ms",
            "value": 1.533,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=256/warnings=1/bytes=55/catchup_ms",
            "value": 5.46,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=1024/warnings=1/bytes=57/catchup_ms",
            "value": 26.146,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=1/groups=128/drop_us",
            "value": 104.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=4/groups=128/drop_us",
            "value": 43.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=16/groups=128/drop_us",
            "value": 39.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=1/groups=128/drop_us",
            "value": 37.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=4/groups=128/drop_us",
            "value": 40.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=16/groups=128/drop_us",
            "value": 34.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=1/groups=128/drop_us",
            "value": 36.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=4/groups=128/drop_us",
            "value": 37.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=16/groups=128/drop_us",
            "value": 38.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/publish_us",
            "value": 25.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/end_us",
            "value": 13.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/idle_us",
            "value": 55.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/publish_us",
            "value": 11.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/end_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/idle_us",
            "value": 117.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/publish_us",
            "value": 17.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/end_us",
            "value": 15.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/idle_us",
            "value": 461.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/publish_us",
            "value": 10.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/end_us",
            "value": 17.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/idle_us",
            "value": 1927.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/publish_us",
            "value": 30.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/end_us",
            "value": 17.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/idle_us",
            "value": 65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/publish_us",
            "value": 24.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/end_us",
            "value": 18.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/idle_us",
            "value": 204.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/publish_us",
            "value": 25.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/end_us",
            "value": 19.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/idle_us",
            "value": 793.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/publish_us",
            "value": 23.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/end_us",
            "value": 19.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/idle_us",
            "value": 4644.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/publish_us",
            "value": 82.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/end_us",
            "value": 26.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/idle_us",
            "value": 122.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/publish_us",
            "value": 81.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/end_us",
            "value": 27.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/idle_us",
            "value": 492.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/publish_us",
            "value": 74.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/end_us",
            "value": 26.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/idle_us",
            "value": 2596.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/publish_us",
            "value": 60.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/end_us",
            "value": 24.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/idle_us",
            "value": 13569,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/publish_us",
            "value": 144.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/end_us",
            "value": 12.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/idle_us",
            "value": 170.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/publish_us",
            "value": 147.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/end_us",
            "value": 10.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/idle_us",
            "value": 206.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/publish_us",
            "value": 156.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/end_us",
            "value": 10.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/idle_us",
            "value": 452.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/publish_us",
            "value": 163.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/end_us",
            "value": 11.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/idle_us",
            "value": 1905.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/publish_us",
            "value": 906.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/end_us",
            "value": 16.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/idle_us",
            "value": 286.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/publish_us",
            "value": 855.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/end_us",
            "value": 15.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/idle_us",
            "value": 396.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/publish_us",
            "value": 779.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/end_us",
            "value": 16.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/idle_us",
            "value": 1009.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/publish_us",
            "value": 730.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/end_us",
            "value": 17.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/idle_us",
            "value": 4808.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/publish_us",
            "value": 3236.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/end_us",
            "value": 25.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/idle_us",
            "value": 590,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/publish_us",
            "value": 3163.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/end_us",
            "value": 28.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/idle_us",
            "value": 1099.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/publish_us",
            "value": 2991.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/end_us",
            "value": 28.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/idle_us",
            "value": 3315.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/publish_us",
            "value": 2881.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/end_us",
            "value": 31.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/idle_us",
            "value": 15734.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=encode/ns_per_op",
            "value": 48.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode-varint/ns_per_op",
            "value": 7.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=encode/ns_per_op",
            "value": 49.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode/ns_per_op",
            "value": 8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode-varint/ns_per_op",
            "value": 8.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=encode/ns_per_op",
            "value": 53.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode/ns_per_op",
            "value": 7.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode-varint/ns_per_op",
            "value": 8.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=encode/ns_per_op",
            "value": 49.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode/ns_per_op",
            "value": 17,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode-varint/ns_per_op",
            "value": 11.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=encode/ns_per_op",
            "value": 50.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode-varint/ns_per_op",
            "value": 12,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=encode/ns_per_op",
            "value": 50.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode/ns_per_op",
            "value": 8.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode-varint/ns_per_op",
            "value": 12.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=encode/ns_per_op",
            "value": 55.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode/ns_per_op",
            "value": 8.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode-varint/ns_per_op",
            "value": 12.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=encode/ns_per_op",
            "value": 60.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode/ns_per_op",
            "value": 21.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode-varint/ns_per_op",
            "value": 15.5,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Luke Curley",
            "username": "kixelated",
            "email": "kixelated@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0513c07369357ae0ecd6109d0f6afc61d16b597f",
          "message": "fix(net)!: ranges refuse what the wire drops (#6519)\n\nCo-authored-by: Luke Curley <432854+kixelated@users.noreply.github.com>\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-24T09:10:41Z",
          "url": "https://github.com/shermerL/moq/commit/0513c07369357ae0ecd6109d0f6afc61d16b597f"
        },
        "date": 1792845457375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=0/ns_per_handle_write",
            "value": 477,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=256/ns_per_handle_write",
            "value": 225,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=4096/ns_per_handle_write",
            "value": 875,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=0/ns_per_handle_write",
            "value": 193,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=256/ns_per_handle_write",
            "value": 146,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=4096/ns_per_handle_write",
            "value": 150,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=0/ns_per_handle_write",
            "value": 167,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=256/ns_per_handle_write",
            "value": 104,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=4096/ns_per_handle_write",
            "value": 115,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=0ms/ns_per_callback",
            "value": 255.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=80ms/ns_per_callback",
            "value": 251.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=0ms/ns_per_callback",
            "value": 102.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=80ms/ns_per_callback",
            "value": 67.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=0ms/ns_per_callback",
            "value": 81.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=80ms/ns_per_callback",
            "value": 65.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=0ms/ns_per_callback",
            "value": 36,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=80ms/ns_per_callback",
            "value": 37.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=0ms/ns_per_callback",
            "value": 33.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=80ms/ns_per_callback",
            "value": 30.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=0ms/ns_per_callback",
            "value": 31.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=80ms/ns_per_callback",
            "value": 41.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=0ms/ns_per_callback",
            "value": 30,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=80ms/ns_per_callback",
            "value": 38.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=0ms/ns_per_callback",
            "value": 47.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=80ms/ns_per_callback",
            "value": 49.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=0ms/ns_per_callback",
            "value": 29.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=80ms/ns_per_callback",
            "value": 29.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=1/update_us",
            "value": 269.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=8/update_us",
            "value": 620.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=32/update_us",
            "value": 1703.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=1/update_us",
            "value": 237.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=8/update_us",
            "value": 1276.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=32/update_us",
            "value": 5357.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=1/update_us",
            "value": 658.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=8/update_us",
            "value": 5574.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=32/update_us",
            "value": 20485.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=1/update_us",
            "value": 150.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=8/update_us",
            "value": 349,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=32/update_us",
            "value": 1250.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=1/update_us",
            "value": 195.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=8/update_us",
            "value": 1151.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=32/update_us",
            "value": 4122.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=1/update_us",
            "value": 547.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=8/update_us",
            "value": 3892.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=32/update_us",
            "value": 15191,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=1/update_us",
            "value": 49.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=8/update_us",
            "value": 355.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=32/update_us",
            "value": 1166,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=1/update_us",
            "value": 158.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=8/update_us",
            "value": 1020.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=32/update_us",
            "value": 3973.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=1/update_us",
            "value": 540.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=8/update_us",
            "value": 3880.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=32/update_us",
            "value": 15119.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=1/update_us",
            "value": 58.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=8/update_us",
            "value": 362.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=32/update_us",
            "value": 1218.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=1/update_us",
            "value": 169.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=8/update_us",
            "value": 1080.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=32/update_us",
            "value": 4272,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=1/update_us",
            "value": 553.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=8/update_us",
            "value": 4012.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=32/update_us",
            "value": 17363.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=1/demand_update_us",
            "value": 12.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=8/demand_update_us",
            "value": 10.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=32/demand_update_us",
            "value": 7.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=1/demand_update_us",
            "value": 5.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=8/demand_update_us",
            "value": 5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=32/demand_update_us",
            "value": 5.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=1/demand_update_us",
            "value": 6.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=8/demand_update_us",
            "value": 11.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=32/demand_update_us",
            "value": 9.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=1/create_remove_and_read_us",
            "value": 13.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=8/create_remove_and_read_us",
            "value": 35.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=32/create_remove_and_read_us",
            "value": 52.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=1/create_remove_and_read_us",
            "value": 4.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=8/create_remove_and_read_us",
            "value": 8.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=32/create_remove_and_read_us",
            "value": 35.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=1/create_remove_and_read_us",
            "value": 3.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=8/create_remove_and_read_us",
            "value": 8.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=32/create_remove_and_read_us",
            "value": 22.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=1/update_and_read_us",
            "value": 246.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=8/update_and_read_us",
            "value": 38.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=32/update_and_read_us",
            "value": 41.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=1/update_and_read_us",
            "value": 21.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=8/update_and_read_us",
            "value": 24.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=32/update_and_read_us",
            "value": 38.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=1/update_and_read_us",
            "value": 44.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=8/update_and_read_us",
            "value": 93.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=32/update_and_read_us",
            "value": 37.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=1/update_and_read_us",
            "value": 15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=8/update_and_read_us",
            "value": 12.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=32/update_and_read_us",
            "value": 25.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=1/update_and_read_us",
            "value": 13.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=8/update_and_read_us",
            "value": 14.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=32/update_and_read_us",
            "value": 26.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=1/update_and_read_us",
            "value": 19.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=8/update_and_read_us",
            "value": 26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=32/update_and_read_us",
            "value": 32.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=1/grant_update_us",
            "value": 3.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=8/grant_update_us",
            "value": 21.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=32/grant_update_us",
            "value": 71.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=1/grant_update_us",
            "value": 9.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=8/grant_update_us",
            "value": 63.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=32/grant_update_us",
            "value": 262.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=1/grant_update_us",
            "value": 32.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=8/grant_update_us",
            "value": 254.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=32/grant_update_us",
            "value": 1052.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=1/update_us",
            "value": 395.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=8/update_us",
            "value": 123.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=32/update_us",
            "value": 109.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=1/update_us",
            "value": 215.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=8/update_us",
            "value": 226.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=32/update_us",
            "value": 222.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=1/update_us",
            "value": 617.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=8/update_us",
            "value": 374.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=32/update_us",
            "value": 660.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=8/update_and_consume_us",
            "value": 2.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=32/update_and_consume_us",
            "value": 3.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=128/update_and_consume_us",
            "value": 9.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=8/update_and_consume_us",
            "value": 1.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=32/update_and_consume_us",
            "value": 1.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=128/update_and_consume_us",
            "value": 1.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=8/update_and_consume_us",
            "value": 1.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=32/update_and_consume_us",
            "value": 1.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=128/update_and_consume_us",
            "value": 1.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=1/duplicates=0/select_us",
            "value": 3.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=8/duplicates=0/select_us",
            "value": 15.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=32/duplicates=0/select_us",
            "value": 46.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=1/duplicates=0/select_us",
            "value": 1.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=8/duplicates=0/select_us",
            "value": 23.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=32/duplicates=0/select_us",
            "value": 50.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=1/duplicates=0/select_us",
            "value": 1.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=8/duplicates=0/select_us",
            "value": 12.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=32/duplicates=0/select_us",
            "value": 58.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=1/stale=0/invalidate_us",
            "value": 4.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=8/stale=0/invalidate_us",
            "value": 16.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=32/stale=0/invalidate_us",
            "value": 85.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=1/stale=0/invalidate_us",
            "value": 2.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=8/stale=0/invalidate_us",
            "value": 11.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=32/stale=0/invalidate_us",
            "value": 54.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=1/stale=0/invalidate_us",
            "value": 1.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=8/stale=0/invalidate_us",
            "value": 13.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=32/stale=0/invalidate_us",
            "value": 83.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=1/refused=256/retire_us",
            "value": 4.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=8/refused=2048/retire_us",
            "value": 19.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=32/refused=8192/retire_us",
            "value": 77.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=1/refused=256/retire_us",
            "value": 5.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=8/refused=2048/retire_us",
            "value": 19.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=32/refused=8192/retire_us",
            "value": 96.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=1/refused=256/retire_us",
            "value": 11.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=8/refused=2048/retire_us",
            "value": 27.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=32/refused=8192/retire_us",
            "value": 83.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=1/update_us",
            "value": 935.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=8/update_us",
            "value": 135,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=32/update_us",
            "value": 251.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=1/update_us",
            "value": 64.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=8/update_us",
            "value": 272.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=32/update_us",
            "value": 849.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=1/update_us",
            "value": 207.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=8/update_us",
            "value": 803.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=32/update_us",
            "value": 2686.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=1/catalog_publishes=2/subscribe_updates=2/unlimited_subscribe_updates=1000/elapsed_ms",
            "value": 43.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=4/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=16/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 35.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=1/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 47.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=4/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 47.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=16/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 48.5,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=1/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 109.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=4/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 108.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=16/catalog_publishes=2/subscribe_updates=512/unlimited_subscribe_updates=256000/elapsed_ms",
            "value": 114.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/arm_us",
            "value": 148.2229999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/advance_us",
            "value": 9.566999999999659,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/cancel_us",
            "value": 247.5529999999999,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/arm_us",
            "value": 87.63500000000057,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/advance_us",
            "value": 12.454999999999217,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/cancel_us",
            "value": 144.99100000000098,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/arm_us",
            "value": 75.9950000000007,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/advance_us",
            "value": 54.42899999999895,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/cancel_us",
            "value": 72.17999999999947,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/arm_us",
            "value": 741.1549999999991,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/advance_us",
            "value": 5.880000000001218,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1489.0380000000007,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/arm_us",
            "value": 637.2009999999975,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/advance_us",
            "value": 11.743000000002723,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1422.4019999999982,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/arm_us",
            "value": 632.4100000000001,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/advance_us",
            "value": 78.8830000000047,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1278.585999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 638.2729999999981,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 323.5880000000009,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 663.5679999999979,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/arm_us",
            "value": 8310.575999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/advance_us",
            "value": 6.790999999992664,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 17952.757999999987,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/arm_us",
            "value": 8451.727000000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/advance_us",
            "value": 17.390999999975065,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 18938.657999999974,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/arm_us",
            "value": 8083.813999999961,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/advance_us",
            "value": 96.90599999998994,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 18918.71500000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 8411.69000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 629.0330000000495,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 18719.494999999937,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/arm_us",
            "value": 51.33299999999963,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/advance_us",
            "value": 0.7679999999936626,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/cancel_us",
            "value": 26.72599999993963,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/arm_us",
            "value": 52.24499999997079,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/advance_us",
            "value": 2.9680000000098516,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/cancel_us",
            "value": 24.277999999981148,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/arm_us",
            "value": 50.71700000007695,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/advance_us",
            "value": 22.83799999997882,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/cancel_us",
            "value": 1.2799999999515421,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1728.7109999999757,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/advance_us",
            "value": 2.943999999956759,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 367.30599999998503,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1734.1180000000804,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/advance_us",
            "value": 8.471999999983382,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 369.3940000000566,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1712.1759999999995,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/advance_us",
            "value": 48.581000000012864,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 313.38099999993574,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1714.5040000000336,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 337.6269999999977,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 7.063000000016473,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/arm_us",
            "value": 289753.22500000015,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/advance_us",
            "value": 15.366999999969266,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 12519.88799999981,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/arm_us",
            "value": 281114.61300000065,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/advance_us",
            "value": 50.35700000007637,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 12798.687000000427,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/arm_us",
            "value": 284559.4319999991,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/advance_us",
            "value": 326.7180000002554,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 12603.95200000039,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 279528.82399999996,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 2662.376000000222,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10290.69299999992,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/arm_us",
            "value": 71.26900000002934,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/advance_us",
            "value": 41.43800000019837,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/cancel_us",
            "value": 147.8240000005826,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/arm_us",
            "value": 56.172999999944295,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/advance_us",
            "value": 136.06500000059896,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/cancel_us",
            "value": 123.24900000021444,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/arm_us",
            "value": 56.27699999968172,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/advance_us",
            "value": 658.2760000001144,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/cancel_us",
            "value": 64.43699999999808,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/arm_us",
            "value": 596.5040000000954,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/advance_us",
            "value": 46.86099999980797,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1454.9690000003466,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/arm_us",
            "value": 597.2400000000562,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/advance_us",
            "value": 115.75400000037916,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1345.9509999993315,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/arm_us",
            "value": 596.8480000001364,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/advance_us",
            "value": 706.9540000002235,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1351.2549999995827,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 586.1290000002555,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 6182.385999999497,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 660.2600000005623,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/arm_us",
            "value": 11419.056000000637,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/advance_us",
            "value": 75.47599999998056,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 16826.492000000144,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/arm_us",
            "value": 8645.797999999559,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/advance_us",
            "value": 207.0449999991979,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 18808.993000000555,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/arm_us",
            "value": 9050.959999998668,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/advance_us",
            "value": 856.0900000011316,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 18051.225999999588,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 8730.46500000055,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 9182.007999999769,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 15312.198000001445,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/arm_us",
            "value": 69.64499999958207,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/advance_us",
            "value": 22.246000000450294,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/cancel_us",
            "value": 31.23799999957555,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/arm_us",
            "value": 68.74000000061642,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/advance_us",
            "value": 81.65100000042003,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/cancel_us",
            "value": 30.342000000018743,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/arm_us",
            "value": 74.13199999973585,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/advance_us",
            "value": 635.3739999995014,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/cancel_us",
            "value": 5.111999998916872,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1830.0369999997201,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/advance_us",
            "value": 37.07799999938288,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 390.93000000139,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1741.570000000138,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/advance_us",
            "value": 109.85799999980372,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 376.643999999942,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1725.5070000010164,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/advance_us",
            "value": 665.5719999998837,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 328.46299999982875,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1811.3670000002458,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 6810.240000000704,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 8.143000000927714,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/arm_us",
            "value": 326948.17799999873,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/advance_us",
            "value": 140.77700000052573,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 12700.643999998647,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/arm_us",
            "value": 278899.8589999992,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/advance_us",
            "value": 520.144000000073,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 12892.635000000155,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/arm_us",
            "value": 267868.71900000004,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/advance_us",
            "value": 1495.1079999991634,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 12363.652000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 283247.93800000043,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 9824.518999999782,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 9886.355999999068,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1/decoded=1/us_per_fragment",
            "value": 18.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=64/decoded=64/us_per_fragment",
            "value": 31.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1024/decoded=1024/us_per_fragment",
            "value": 161.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=4294967295/decoded=0/us_per_fragment",
            "value": 6.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1/decoded=1/us_per_fragment",
            "value": 54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=64/decoded=64/us_per_fragment",
            "value": 63.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1024/decoded=1024/us_per_fragment",
            "value": 148.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=4294967295/decoded=0/us_per_fragment",
            "value": 4.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/us",
            "value": 2950.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/us",
            "value": 810.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/us",
            "value": 1449.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/us",
            "value": 430.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/us",
            "value": 1010.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/us",
            "value": 388.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/us",
            "value": 3192.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/us",
            "value": 1378.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/us",
            "value": 3291.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/us",
            "value": 1274.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/us",
            "value": 3158.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/us",
            "value": 995.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/us",
            "value": 10898.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/us",
            "value": 2709.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/us",
            "value": 9872.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/us",
            "value": 2604.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/us",
            "value": 10859.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/us",
            "value": 3533.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=1/retained_bytes=-34702/deliver_us",
            "value": 379.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=8/retained_bytes=88284/deliver_us",
            "value": 276.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=64/retained_bytes=165163/deliver_us",
            "value": 331,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=1/retained_bytes=289508/deliver_us",
            "value": 278.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=8/retained_bytes=399533/deliver_us",
            "value": 290.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=64/retained_bytes=642772/deliver_us",
            "value": 281.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=1/retained_bytes=965399/deliver_us",
            "value": 263,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=8/retained_bytes=1196712/deliver_us",
            "value": 283.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=64/retained_bytes=3440572/deliver_us",
            "value": 290,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle/size_bytes",
            "value": 106626,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle_gzip/size_bytes",
            "value": 31962,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 7235,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 2537,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 2698,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 2601,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 2697,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 2489,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 3623,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 2579,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 1974,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 2286,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 2731,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 3032,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/seal_us",
            "value": 35.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/open_us",
            "value": 33.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/seal_us",
            "value": 33.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/open_us",
            "value": 32.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/seal_us",
            "value": 33.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/open_us",
            "value": 33.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/seal_us",
            "value": 37.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/open_us",
            "value": 34.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/seal_us",
            "value": 36.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/open_us",
            "value": 34.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/seal_us",
            "value": 37.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/open_us",
            "value": 35.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/seal_us",
            "value": 60.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/open_us",
            "value": 46.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/seal_us",
            "value": 61.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/open_us",
            "value": 48.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/seal_us",
            "value": 54.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/open_us",
            "value": 47.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/seal_us",
            "value": 276.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/open_us",
            "value": 209.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/seal_us",
            "value": 287.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/open_us",
            "value": 185,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/seal_us",
            "value": 258,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/open_us",
            "value": 183.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=8/update_us",
            "value": 292.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=32/update_us",
            "value": 377.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=128/update_us",
            "value": 785.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=8/update_us",
            "value": 160.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=32/update_us",
            "value": 195.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=128/update_us",
            "value": 622,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=8/update_us",
            "value": 180.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=32/update_us",
            "value": 281.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=128/update_us",
            "value": 680.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=8/update_us",
            "value": 81.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=32/update_us",
            "value": 176.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=128/update_us",
            "value": 605.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=8/update_us",
            "value": 74.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=32/update_us",
            "value": 200,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=128/update_us",
            "value": 620.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=8/update_us",
            "value": 63.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=32/update_us",
            "value": 171,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=128/update_us",
            "value": 650.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=1/watch_us",
            "value": 85.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=8/watch_us",
            "value": 126.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=32/watch_us",
            "value": 365.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=1/watch_us",
            "value": 61.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=8/watch_us",
            "value": 126.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=32/watch_us",
            "value": 414.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=1/watch_us",
            "value": 57.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=8/watch_us",
            "value": 172.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=32/watch_us",
            "value": 572.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/ns_per_frame",
            "value": 4512,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/first_frame_us",
            "value": 8.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 851,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 29.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 839,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 29.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 840,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 27.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 5432,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 9.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1199,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 14.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 834,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 29.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 839,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 28.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 6135,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 11.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 5531,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 11.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1434,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 21.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 841,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 27.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 872,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1559.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/ns_per_frame",
            "value": 6850,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/first_frame_us",
            "value": 55.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 1504,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 58.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1298,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 41.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1231,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 40.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 7279,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 22.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1717,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 21.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1107,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 41.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1123,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 34.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 9092,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 26.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 7581,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 30.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 2313,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 36.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 941,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 33.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 820,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1449.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=1/acquire+release",
            "value": 0.102,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=16/acquire+release",
            "value": 0.088,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=1/tracks=256/acquire+release",
            "value": 0.083,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=1/acquire+release",
            "value": 0.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=16/acquire+release",
            "value": 0.099,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=16/tracks=256/acquire+release",
            "value": 0.092,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=1/acquire+release",
            "value": 0.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=16/acquire+release",
            "value": 0.095,
            "unit": "us"
          },
          {
            "name": "bench-js/js/interests/broadcasts=256/tracks=256/acquire+release",
            "value": 0.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=in/ns_per_frame",
            "value": 171.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=reordered/ns_per_frame",
            "value": 48.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=in/ns_per_frame",
            "value": 126.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=reordered/ns_per_frame",
            "value": 49.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=in/ns_per_frame",
            "value": 145,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=reordered/ns_per_frame",
            "value": 60.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=in/ns_per_frame",
            "value": 165.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=reordered/ns_per_frame",
            "value": 84,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=none/ms_per_update",
            "value": 0.003474,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=deflate/ms_per_update",
            "value": 0.076981,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=none/ms_per_update",
            "value": 0.004379,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=deflate/ms_per_update",
            "value": 0.061546,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=none/ms_per_update",
            "value": 0.006759,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=deflate/ms_per_update",
            "value": 0.074329,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=none/ms_per_update",
            "value": 0.020701,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=deflate/ms_per_update",
            "value": 0.064395,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=none/ms_per_update",
            "value": 0.022271,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=deflate/ms_per_update",
            "value": 0.081524,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=none/ms_per_update",
            "value": 0.63402,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=deflate/ms_per_update",
            "value": 0.701821,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=none/ms_per_update",
            "value": 0.633629,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=deflate/ms_per_update",
            "value": 0.724217,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/json_parse_us",
            "value": 2.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/parse_us",
            "value": 3.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/json_parse_us",
            "value": 2.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/parse_us",
            "value": 4.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/json_parse_us",
            "value": 22.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/parse_us",
            "value": 40.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/json_parse_us",
            "value": 343.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/parse_us",
            "value": 540.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=none/ns_per_record",
            "value": 3963.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 58430.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=none/ns_per_record",
            "value": 5947,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 39816.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=none/ns_per_record",
            "value": 1114.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 27202.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=none/ns_per_record",
            "value": 2876,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 20155.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/encode_ns",
            "value": 65612,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/decode_ns",
            "value": 9536,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/encode_ns",
            "value": 66373,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/decode_ns",
            "value": 9620,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/encode_ns",
            "value": 55604,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/decode_ns",
            "value": 7619,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/encode_ns",
            "value": 55686,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/decode_ns",
            "value": 7879,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/encode_ns",
            "value": 5260,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/decode_ns",
            "value": 2041,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/encode_ns",
            "value": 5274,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/decode_ns",
            "value": 1964,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/encode_ns",
            "value": 12459,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/decode_ns",
            "value": 5196,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/encode_ns",
            "value": 14241,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/decode_ns",
            "value": 5786,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/encode_ns",
            "value": 2592,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/decode_ns",
            "value": 1702,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/encode_ns",
            "value": 2547,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/decode_ns",
            "value": 1681,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/encode_ns",
            "value": 9742,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/decode_ns",
            "value": 5453,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/encode_ns",
            "value": 9453,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/decode_ns",
            "value": 4955,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=0/held_estimates=1/update_us",
            "value": 13.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=1/held_estimates=1/update_us",
            "value": 14.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=8/held_estimates=1/update_us",
            "value": 27.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=64/held_estimates=1/update_us",
            "value": 118.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=0/held_estimates=32/update_us",
            "value": 11.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=1/held_estimates=32/update_us",
            "value": 13.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=8/held_estimates=32/update_us",
            "value": 25.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=64/held_estimates=32/update_us",
            "value": 120.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=0/held_estimates=256/update_us",
            "value": 10.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=1/held_estimates=256/update_us",
            "value": 12.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=8/held_estimates=256/update_us",
            "value": 24.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=64/held_estimates=256/update_us",
            "value": 121.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=0/held_estimates=0/update_us",
            "value": 3.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=1/held_estimates=1/update_us",
            "value": 12.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=8/held_estimates=1/update_us",
            "value": 27.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=64/held_estimates=1/update_us",
            "value": 151.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=0/held_estimates=0/update_us",
            "value": 3.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=1/held_estimates=32/update_us",
            "value": 11.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=8/held_estimates=32/update_us",
            "value": 26.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=64/held_estimates=32/update_us",
            "value": 162.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=0/held_estimates=0/update_us",
            "value": 2.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=1/held_estimates=256/update_us",
            "value": 10.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=8/held_estimates=256/update_us",
            "value": 25.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=64/held_estimates=256/update_us",
            "value": 158.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=1024/records=3/elapsed_ms",
            "value": 4.188,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=16384/records=4/elapsed_ms",
            "value": 0.745,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=262144/records=19/elapsed_ms",
            "value": 2.577,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=1024/records=17/elapsed_ms",
            "value": 1.733,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=16384/records=25/elapsed_ms",
            "value": 2.512,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=262144/records=145/elapsed_ms",
            "value": 10.941,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=1024/records=129/elapsed_ms",
            "value": 6.315,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=16384/records=193/elapsed_ms",
            "value": 7.968,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=262144/records=1154/elapsed_ms",
            "value": 52.073,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=4/ns_per_change",
            "value": 4790.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=16/ns_per_change",
            "value": 6043.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=64/ns_per_change",
            "value": 21101.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=4/ns_per_change",
            "value": 318.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=16/ns_per_change",
            "value": 2474,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=64/ns_per_change",
            "value": 15128.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=4/ns_per_change",
            "value": 363.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=16/ns_per_change",
            "value": 1452,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=64/ns_per_change",
            "value": 15273.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1025/kind=stream/frames=1/us_per_record",
            "value": 11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=16/us_per_record",
            "value": 50.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=256/us_per_record",
            "value": 255.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=empty/frames=256/us_per_record",
            "value": 184.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=max_data/frames=204/us_per_record",
            "value": 89.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16381/kind=stream/frames=1/us_per_record",
            "value": 7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16384/kind=stream/frames=16/us_per_record",
            "value": 21.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16128/kind=stream/frames=256/us_per_record",
            "value": 250.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=empty/frames=4095/us_per_record",
            "value": 3615.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=max_data/frames=3276/us_per_record",
            "value": 1040.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1200/chunks=14/ns_per_byte",
            "value": 0.913,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=16384/chunks=1/ns_per_byte",
            "value": 0.079,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.058,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1200/chunks=219/ns_per_byte",
            "value": 0.428,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=16384/chunks=16/ns_per_byte",
            "value": 0.24,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1200/chunks=874/ns_per_byte",
            "value": 0.463,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=16384/chunks=64/ns_per_byte",
            "value": 0.211,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.001,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=1/refresh_us",
            "value": 438.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=8/refresh_us",
            "value": 423.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=32/refresh_us",
            "value": 733.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=1/refresh_us",
            "value": 196.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=8/refresh_us",
            "value": 253.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=32/refresh_us",
            "value": 535.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=1/refresh_us",
            "value": 151.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=8/refresh_us",
            "value": 185.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=32/refresh_us",
            "value": 485.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=1/refresh_us",
            "value": 240.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=8/refresh_us",
            "value": 770.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=32/refresh_us",
            "value": 2493.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=1/refresh_us",
            "value": 204.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=8/refresh_us",
            "value": 709.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=32/refresh_us",
            "value": 2370.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=1/refresh_us",
            "value": 198.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=8/refresh_us",
            "value": 692.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=32/refresh_us",
            "value": 3033.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=1/refresh_us",
            "value": 5181.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=8/refresh_us",
            "value": 43386.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=32/refresh_us",
            "value": 169502.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=1/refresh_us",
            "value": 5197.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=8/refresh_us",
            "value": 41260.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=32/refresh_us",
            "value": 168304.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=1/refresh_us",
            "value": 5228.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=8/refresh_us",
            "value": 40590.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=32/refresh_us",
            "value": 165736.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 2.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 22.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 48558.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 6.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 84.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 319550.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 21.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 287.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 1093073.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 5.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 49.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 82752.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 17.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 338.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 690059.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 73.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1240.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 2453263.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=8/accepted=8/admit_us",
            "value": 3.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=128/accepted=128/admit_us",
            "value": 47.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 129161.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=8/accepted=64/admit_us",
            "value": 16.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 341.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 1029914.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=8/accepted=256/admit_us",
            "value": 70.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1327.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 4271599.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 1.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 17.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 17730.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 5.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 82.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 103817.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 15.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 232.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 409770.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 4.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 43.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 80584.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 17.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 293.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 509200.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 67.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1153.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 1983989.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 2.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 44.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 144799.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 20.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 419.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 1235776.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 75.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1509.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 4907322.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=1/update_us",
            "value": 37.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=8/update_us",
            "value": 49.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=32/update_us",
            "value": 111.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=1/update_us",
            "value": 25.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=8/update_us",
            "value": 40.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=32/update_us",
            "value": 102.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=1/update_us",
            "value": 42.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=8/update_us",
            "value": 59.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=32/update_us",
            "value": 129.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=1/update_us",
            "value": 13.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=8/update_us",
            "value": 13.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=32/update_us",
            "value": 15.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=1/update_us",
            "value": 17.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=8/update_us",
            "value": 18.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=32/update_us",
            "value": 20.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=1/update_us",
            "value": 32.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=8/update_us",
            "value": 34.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=32/update_us",
            "value": 33.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=1/cancel_us",
            "value": 15.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=8/cancel_us",
            "value": 89.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=32/cancel_us",
            "value": 141.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=1/cancel_us",
            "value": 7.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=8/cancel_us",
            "value": 43.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=32/cancel_us",
            "value": 126.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=1/cancel_us",
            "value": 7.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=8/cancel_us",
            "value": 32.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=32/cancel_us",
            "value": 100.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=0/cancel_us",
            "value": 2.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=128/cancel_us",
            "value": 3.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=0/cancel_us",
            "value": 3.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=128/cancel_us",
            "value": 3.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=0/cancel_us",
            "value": 3.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=128/cancel_us",
            "value": 5.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=0/cancel_us",
            "value": 17.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=128/cancel_us",
            "value": 22.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/active_ms",
            "value": 2.93,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/settled_ms",
            "value": 4.33,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/active_ms",
            "value": 8.75,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/settled_ms",
            "value": 15.25,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/active_ms",
            "value": 13.07,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/settled_ms",
            "value": 19.12,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/active_ms",
            "value": 38.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/settled_ms",
            "value": 66.65,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/active_ms",
            "value": 63.26,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/settled_ms",
            "value": 85.77,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/active_ms",
            "value": 188.28,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/settled_ms",
            "value": 288.78,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/active_ms",
            "value": 3.7,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/settled_ms",
            "value": 5.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/active_ms",
            "value": 9.21,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/settled_ms",
            "value": 14.21,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/active_ms",
            "value": 14.91,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/settled_ms",
            "value": 20.36,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/active_ms",
            "value": 43.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/settled_ms",
            "value": 66.24,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/active_ms",
            "value": 68.45,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/settled_ms",
            "value": 92.11,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/active_ms",
            "value": 189.35,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/settled_ms",
            "value": 312.63,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/active_ms",
            "value": 3.02,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/settled_ms",
            "value": 3.02,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/active_ms",
            "value": 3.13,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/settled_ms",
            "value": 3.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/active_ms",
            "value": 10.77,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/settled_ms",
            "value": 10.77,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/active_ms",
            "value": 11.89,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/settled_ms",
            "value": 11.9,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/active_ms",
            "value": 54.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/settled_ms",
            "value": 54.15,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/active_ms",
            "value": 61.79,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/settled_ms",
            "value": 61.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/active_us",
            "value": 10.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/settled_us",
            "value": 22.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/active_us",
            "value": 113.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/settled_us",
            "value": 215.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/active_us",
            "value": 2433.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/settled_us",
            "value": 4251.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/active_us",
            "value": 12.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/settled_us",
            "value": 21.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/active_us",
            "value": 116.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/settled_us",
            "value": 218.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/active_us",
            "value": 2073.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/settled_us",
            "value": 3559.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/active_us",
            "value": 18.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/settled_us",
            "value": 30.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/active_us",
            "value": 124.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/settled_us",
            "value": 218.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/active_us",
            "value": 2074.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/settled_us",
            "value": 3466.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/active_us",
            "value": 5.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/settled_us",
            "value": 10.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/active_us",
            "value": 117.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/settled_us",
            "value": 209.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/active_us",
            "value": 2173.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/settled_us",
            "value": 3781.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/active_us",
            "value": 6.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/settled_us",
            "value": 13.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/active_us",
            "value": 122.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/settled_us",
            "value": 216.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/active_us",
            "value": 2034.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/settled_us",
            "value": 3533.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/active_us",
            "value": 10.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/settled_us",
            "value": 22.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/active_us",
            "value": 123.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/settled_us",
            "value": 228.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/active_us",
            "value": 2322.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/settled_us",
            "value": 3855.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=1/update_us",
            "value": 563.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=8/update_us",
            "value": 1188.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=1/update_us",
            "value": 1439.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=8/update_us",
            "value": 8554.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=1/update_us",
            "value": 4298.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=8/update_us",
            "value": 34376.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=1/update_us",
            "value": 116.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=8/update_us",
            "value": 582.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=1/update_us",
            "value": 1067.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=8/update_us",
            "value": 7254.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=1/update_us",
            "value": 3658.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=8/update_us",
            "value": 31366.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/direct_us",
            "value": 3.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/front_us",
            "value": 4.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/fork_us",
            "value": 4.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/direct_us",
            "value": 2.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/front_us",
            "value": 3.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/fork_us",
            "value": 2.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/direct_us",
            "value": 1.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/front_us",
            "value": 3.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/fork_us",
            "value": 2.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/direct_us",
            "value": 2.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/front_us",
            "value": 5.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/fork_us",
            "value": 4.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/direct_us",
            "value": 2.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/front_us",
            "value": 3.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/fork_us",
            "value": 3.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/direct_us",
            "value": 1.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/front_us",
            "value": 3.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/fork_us",
            "value": 2.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/direct_us",
            "value": 3.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/front_us",
            "value": 5.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/fork_us",
            "value": 5.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/direct_us",
            "value": 2.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/front_us",
            "value": 3.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/fork_us",
            "value": 3.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/direct_us",
            "value": 1.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/front_us",
            "value": 2.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/fork_us",
            "value": 2.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=1/flap_us",
            "value": 77.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=16/flap_us",
            "value": 44.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=64/flap_us",
            "value": 34.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=1/flap_us",
            "value": 23.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=16/flap_us",
            "value": 8.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=64/flap_us",
            "value": 9.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=1/flap_us",
            "value": 10.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=16/flap_us",
            "value": 4.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=64/flap_us",
            "value": 3.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=0/readable_us",
            "value": 6.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=0/readable_us",
            "value": 3.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=0/readable_us",
            "value": 2.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1/readable_us",
            "value": 3.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1/readable_us",
            "value": 2.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1/readable_us",
            "value": 1.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=64/readable_us",
            "value": 4.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=64/readable_us",
            "value": 2.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=64/readable_us",
            "value": 2.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1024/readable_us",
            "value": 85.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1024/readable_us",
            "value": 52.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1024/readable_us",
            "value": 50.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=1/us_per_datagram",
            "value": 0.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=1/us_per_datagram",
            "value": 0.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=1/us_per_datagram",
            "value": 0.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=64/us_per_datagram",
            "value": 0.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=64/us_per_datagram",
            "value": 0.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=64/us_per_datagram",
            "value": 0.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=4096/us_per_datagram",
            "value": 0.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=4096/us_per_datagram",
            "value": 0.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=4096/us_per_datagram",
            "value": 0.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/signals/op=new-error/ns_per_op",
            "value": 275,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-close/ns_per_op",
            "value": 2326,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-get-close/ns_per_op",
            "value": 2654,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/slow-group/groups=1/warnings=1/bytes=51/catchup_ms",
            "value": 1.297,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=16/warnings=1/bytes=53/catchup_ms",
            "value": 0.993,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=256/warnings=1/bytes=55/catchup_ms",
            "value": 6.26,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=1024/warnings=1/bytes=57/catchup_ms",
            "value": 22.186,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=1/groups=128/drop_us",
            "value": 60.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=4/groups=128/drop_us",
            "value": 39.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=16/groups=128/drop_us",
            "value": 39.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=1/groups=128/drop_us",
            "value": 29.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=4/groups=128/drop_us",
            "value": 34.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=16/groups=128/drop_us",
            "value": 40,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=1/groups=128/drop_us",
            "value": 29.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=4/groups=128/drop_us",
            "value": 36.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=16/groups=128/drop_us",
            "value": 38.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=1/track_added_us",
            "value": 342.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=4/track_added_us",
            "value": 373.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=16/track_added_us",
            "value": 563.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=1/track_added_us",
            "value": 60.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=4/track_added_us",
            "value": 154.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=16/track_added_us",
            "value": 510.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=1/track_added_us",
            "value": 64.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=4/track_added_us",
            "value": 164.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=16/track_added_us",
            "value": 463,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/publish_us",
            "value": 24.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/end_us",
            "value": 10,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/idle_us",
            "value": 41.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/publish_us",
            "value": 10.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/end_us",
            "value": 10.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/idle_us",
            "value": 98.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/publish_us",
            "value": 9.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/end_us",
            "value": 14.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/idle_us",
            "value": 364.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/publish_us",
            "value": 13.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/end_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/idle_us",
            "value": 1407.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/publish_us",
            "value": 27.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/end_us",
            "value": 18.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/idle_us",
            "value": 54.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/publish_us",
            "value": 25.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/end_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/idle_us",
            "value": 157.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/publish_us",
            "value": 23.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/end_us",
            "value": 13.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/idle_us",
            "value": 527.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/publish_us",
            "value": 23.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/end_us",
            "value": 15.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/idle_us",
            "value": 3147.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/publish_us",
            "value": 86.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/end_us",
            "value": 22.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/idle_us",
            "value": 102.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/publish_us",
            "value": 77.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/end_us",
            "value": 23.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/idle_us",
            "value": 441.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/publish_us",
            "value": 67.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/end_us",
            "value": 26.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/idle_us",
            "value": 1739.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/publish_us",
            "value": 61.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/end_us",
            "value": 34.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/idle_us",
            "value": 12638.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/publish_us",
            "value": 239.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/end_us",
            "value": 10.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/idle_us",
            "value": 129.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/publish_us",
            "value": 221,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/end_us",
            "value": 11.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/idle_us",
            "value": 191.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/publish_us",
            "value": 192.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/end_us",
            "value": 9.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/idle_us",
            "value": 402.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/publish_us",
            "value": 178.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/end_us",
            "value": 8.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/idle_us",
            "value": 1432.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/publish_us",
            "value": 887,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/end_us",
            "value": 16.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/idle_us",
            "value": 226.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/publish_us",
            "value": 879.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/end_us",
            "value": 15.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/idle_us",
            "value": 371.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/publish_us",
            "value": 780.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/end_us",
            "value": 16.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/idle_us",
            "value": 801.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/publish_us",
            "value": 711.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/end_us",
            "value": 17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/idle_us",
            "value": 3755.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/publish_us",
            "value": 3233.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/end_us",
            "value": 25.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/idle_us",
            "value": 541.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/publish_us",
            "value": 3124.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/end_us",
            "value": 27.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/idle_us",
            "value": 924.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/publish_us",
            "value": 2950.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/end_us",
            "value": 28.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/idle_us",
            "value": 2874.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/publish_us",
            "value": 2873.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/end_us",
            "value": 29.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/idle_us",
            "value": 14039.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/publish_us",
            "value": 90.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/end_us",
            "value": 16.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/idle_us",
            "value": 123.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/publish_us",
            "value": 93.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/end_us",
            "value": 14.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/idle_us",
            "value": 168,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/publish_us",
            "value": 115.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/end_us",
            "value": 14.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/idle_us",
            "value": 393.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/publish_us",
            "value": 91.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/end_us",
            "value": 15.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/idle_us",
            "value": 1461.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/publish_us",
            "value": 425.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/end_us",
            "value": 33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/idle_us",
            "value": 216.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/publish_us",
            "value": 455,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/end_us",
            "value": 34.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/idle_us",
            "value": 327.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/publish_us",
            "value": 441.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/end_us",
            "value": 32.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/idle_us",
            "value": 838.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/publish_us",
            "value": 418.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/end_us",
            "value": 41.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/idle_us",
            "value": 4146.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/publish_us",
            "value": 1851.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/end_us",
            "value": 93.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/idle_us",
            "value": 556.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/publish_us",
            "value": 1850.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/end_us",
            "value": 95.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/idle_us",
            "value": 974.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/publish_us",
            "value": 1713.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/end_us",
            "value": 93.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/idle_us",
            "value": 2719.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/publish_us",
            "value": 1649.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/end_us",
            "value": 101.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/idle_us",
            "value": 13709.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=encode/ns_per_op",
            "value": 48.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode-varint/ns_per_op",
            "value": 7.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=encode/ns_per_op",
            "value": 48.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode/ns_per_op",
            "value": 12.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode-varint/ns_per_op",
            "value": 8.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=encode/ns_per_op",
            "value": 52.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode/ns_per_op",
            "value": 7.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode-varint/ns_per_op",
            "value": 8.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=encode/ns_per_op",
            "value": 49.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode/ns_per_op",
            "value": 17.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode-varint/ns_per_op",
            "value": 11.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=encode/ns_per_op",
            "value": 49.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode-varint/ns_per_op",
            "value": 11.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=encode/ns_per_op",
            "value": 49.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode/ns_per_op",
            "value": 8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode-varint/ns_per_op",
            "value": 12.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=encode/ns_per_op",
            "value": 54.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode/ns_per_op",
            "value": 8.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode-varint/ns_per_op",
            "value": 12.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=encode/ns_per_op",
            "value": 59.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode/ns_per_op",
            "value": 21.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode-varint/ns_per_op",
            "value": 15.5,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Luke Curley",
            "username": "kixelated",
            "email": "kixelated@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c8b426bb30945e7f06da14eb2ab6ae1a8974ee4e",
          "message": "refactor(moq-video)!: rename Rate to FrameRate (#6653)\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-25T04:59:11Z",
          "url": "https://github.com/shermerL/moq/commit/c8b426bb30945e7f06da14eb2ab6ae1a8974ee4e"
        },
        "date": 1792933444263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=0/ns_per_handle_write",
            "value": 487,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=256/ns_per_handle_write",
            "value": 251,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=1/backlog=4096/ns_per_handle_write",
            "value": 391,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=0/ns_per_handle_write",
            "value": 175,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=256/ns_per_handle_write",
            "value": 147,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=4/backlog=4096/ns_per_handle_write",
            "value": 171,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=0/ns_per_handle_write",
            "value": 153,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=256/ns_per_handle_write",
            "value": 104,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/arrivals/handles=16/backlog=4096/ns_per_handle_write",
            "value": 114,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=0ms/ns_per_callback",
            "value": 369.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=80ms/ns_per_callback",
            "value": 189.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=0ms/ns_per_callback",
            "value": 180,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=80ms/ns_per_callback",
            "value": 85.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=0ms/ns_per_callback",
            "value": 93.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=80ms/ns_per_callback",
            "value": 63.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=0ms/ns_per_callback",
            "value": 41.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=80ms/ns_per_callback",
            "value": 37.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=0ms/ns_per_callback",
            "value": 34.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=80ms/ns_per_callback",
            "value": 31.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=0ms/ns_per_callback",
            "value": 32.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=80ms/ns_per_callback",
            "value": 48.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=0ms/ns_per_callback",
            "value": 32,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=80ms/ns_per_callback",
            "value": 38.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=0ms/ns_per_callback",
            "value": 49.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=80ms/ns_per_callback",
            "value": 50.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=0ms/ns_per_callback",
            "value": 30.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=80ms/ns_per_callback",
            "value": 30.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=1/update_us",
            "value": 315.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=8/update_us",
            "value": 836.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=32/update_us",
            "value": 1779.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=1/update_us",
            "value": 232.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=8/update_us",
            "value": 1335.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=32/update_us",
            "value": 5553.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=1/update_us",
            "value": 770,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=8/update_us",
            "value": 5937,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=32/update_us",
            "value": 21258.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=1/update_us",
            "value": 93.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=8/update_us",
            "value": 370.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=32/update_us",
            "value": 1365.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=1/update_us",
            "value": 177.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=8/update_us",
            "value": 1237.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=32/update_us",
            "value": 4210.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=1/update_us",
            "value": 598.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=8/update_us",
            "value": 4018.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=32/update_us",
            "value": 15543,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=1/update_us",
            "value": 53.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=8/update_us",
            "value": 330.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=32/update_us",
            "value": 1165.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=1/update_us",
            "value": 160,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=8/update_us",
            "value": 997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=32/update_us",
            "value": 4050,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=1/update_us",
            "value": 568.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=8/update_us",
            "value": 3898.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=32/update_us",
            "value": 15187.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=1/update_us",
            "value": 99.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=8/update_us",
            "value": 317.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=32/update_us",
            "value": 1202.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=1/update_us",
            "value": 171.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=8/update_us",
            "value": 1098.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=32/update_us",
            "value": 4370.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=1/update_us",
            "value": 569.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=8/update_us",
            "value": 4269,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=32/update_us",
            "value": 17628.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=1/demand_update_us",
            "value": 12.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=8/demand_update_us",
            "value": 11.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/observers=32/demand_update_us",
            "value": 8.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=1/demand_update_us",
            "value": 6.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=8/demand_update_us",
            "value": 5.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=32/observers=32/demand_update_us",
            "value": 6.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=1/demand_update_us",
            "value": 9.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=8/demand_update_us",
            "value": 11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/observers=32/demand_update_us",
            "value": 7.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=1/create_remove_and_read_us",
            "value": 11.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=8/create_remove_and_read_us",
            "value": 35.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=32/create_remove_and_read_us",
            "value": 50.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=1/create_remove_and_read_us",
            "value": 3.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=8/create_remove_and_read_us",
            "value": 18.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=32/create_remove_and_read_us",
            "value": 34.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=1/create_remove_and_read_us",
            "value": 3.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=8/create_remove_and_read_us",
            "value": 8.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=32/create_remove_and_read_us",
            "value": 22.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=1/update_and_read_us",
            "value": 91.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=8/update_and_read_us",
            "value": 45.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=32/update_and_read_us",
            "value": 55.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=1/update_and_read_us",
            "value": 30.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=8/update_and_read_us",
            "value": 37.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=32/update_and_read_us",
            "value": 49.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=1/update_and_read_us",
            "value": 23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=8/update_and_read_us",
            "value": 27.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=32/update_and_read_us",
            "value": 101.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=1/update_and_read_us",
            "value": 16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=8/update_and_read_us",
            "value": 11.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=32/update_and_read_us",
            "value": 23.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=1/update_and_read_us",
            "value": 12.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=8/update_and_read_us",
            "value": 13.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=32/update_and_read_us",
            "value": 26.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=1/update_and_read_us",
            "value": 18.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=8/update_and_read_us",
            "value": 89.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=32/update_and_read_us",
            "value": 32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=1/grant_update_us",
            "value": 3.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=8/grant_update_us",
            "value": 22.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=32/grant_update_us",
            "value": 74.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=1/grant_update_us",
            "value": 9.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=8/grant_update_us",
            "value": 64.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=32/grant_update_us",
            "value": 263.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=1/grant_update_us",
            "value": 33.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=8/grant_update_us",
            "value": 257.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=32/grant_update_us",
            "value": 1053.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=1/update_us",
            "value": 370.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=8/update_us",
            "value": 98.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=32/update_us",
            "value": 138.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=1/update_us",
            "value": 241.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=8/update_us",
            "value": 211.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=32/update_us",
            "value": 256.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=1/update_us",
            "value": 636,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=8/update_us",
            "value": 2790,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=32/update_us",
            "value": 588.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=8/update_and_consume_us",
            "value": 2.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=32/update_and_consume_us",
            "value": 6.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=128/update_and_consume_us",
            "value": 7.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=8/update_and_consume_us",
            "value": 1.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=32/update_and_consume_us",
            "value": 1.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=128/update_and_consume_us",
            "value": 2.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=8/update_and_consume_us",
            "value": 1.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=32/update_and_consume_us",
            "value": 1.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=128/update_and_consume_us",
            "value": 1.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=1/duplicates=0/select_us",
            "value": 3.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=8/duplicates=0/select_us",
            "value": 15.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=32/duplicates=0/select_us",
            "value": 67.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=1/duplicates=0/select_us",
            "value": 1.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=8/duplicates=0/select_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=32/duplicates=0/select_us",
            "value": 58.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=1/duplicates=0/select_us",
            "value": 1.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=8/duplicates=0/select_us",
            "value": 12.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=32/duplicates=0/select_us",
            "value": 54.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=1/stale=0/invalidate_us",
            "value": 4.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=8/stale=0/invalidate_us",
            "value": 26.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=32/stale=0/invalidate_us",
            "value": 58.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=1/stale=0/invalidate_us",
            "value": 2.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=8/stale=0/invalidate_us",
            "value": 14.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=32/stale=0/invalidate_us",
            "value": 58.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=1/stale=0/invalidate_us",
            "value": 2.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=8/stale=0/invalidate_us",
            "value": 14.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=32/stale=0/invalidate_us",
            "value": 62.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=1/refused=256/retire_us",
            "value": 3.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=8/refused=2048/retire_us",
            "value": 19.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=32/refused=8192/retire_us",
            "value": 80.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=1/refused=256/retire_us",
            "value": 6.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=8/refused=2048/retire_us",
            "value": 21.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=32/refused=8192/retire_us",
            "value": 84.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=1/refused=256/retire_us",
            "value": 10.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=8/refused=2048/retire_us",
            "value": 39.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=32/refused=8192/retire_us",
            "value": 79.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=1/update_us",
            "value": 984.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=8/update_us",
            "value": 133,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=32/update_us",
            "value": 247.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=1/update_us",
            "value": 65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=8/update_us",
            "value": 273.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=32/update_us",
            "value": 860.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=1/update_us",
            "value": 247.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=8/update_us",
            "value": 870.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=32/update_us",
            "value": 2741.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=1/catalog_publishes=2/subscribe_updates=2/unlimited_subscribe_updates=1000/elapsed_ms",
            "value": 42.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=4/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 35.7,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=16/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 34.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=1/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 47.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=4/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 48.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=16/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 48.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=1/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 111.9,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=4/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 109.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=16/catalog_publishes=2/subscribe_updates=512/unlimited_subscribe_updates=256000/elapsed_ms",
            "value": 114,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/arm_us",
            "value": 174.9869999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/advance_us",
            "value": 5.224000000000117,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/cancel_us",
            "value": 221.5290000000003,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/arm_us",
            "value": 91.90899999999935,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/advance_us",
            "value": 19.936000000001286,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/cancel_us",
            "value": 140.84399999999954,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/arm_us",
            "value": 72.85399999999953,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/advance_us",
            "value": 55.20600000000009,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/cancel_us",
            "value": 70.23700000000055,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/arm_us",
            "value": 755.784000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/advance_us",
            "value": 5.023999999998807,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1472.0800000000017,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/arm_us",
            "value": 616.7879999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/advance_us",
            "value": 10.944000000002063,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1359.6190000000022,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/arm_us",
            "value": 568.1740000000061,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/advance_us",
            "value": 50.639000000003875,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1240.9669999999978,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 595.6130000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 336.4130000000074,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 645.7869999999986,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/arm_us",
            "value": 7816.012999999998,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/advance_us",
            "value": 8.008000000018,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 18247.373999999978,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/arm_us",
            "value": 7535.567999999956,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/advance_us",
            "value": 17.30299999996987,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 18864.780999999995,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/arm_us",
            "value": 7535.582999999974,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/advance_us",
            "value": 81.2029999999595,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 18268.597,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 7959.30599999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 567.545999999993,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 18603.374000000033,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/arm_us",
            "value": 51.27700000002733,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/advance_us",
            "value": 0.647999999955573,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/cancel_us",
            "value": 26.935000000094078,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/arm_us",
            "value": 52.26100000004408,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/advance_us",
            "value": 2.814999999941392,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/cancel_us",
            "value": 24.49500000000171,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/arm_us",
            "value": 52.0769999999402,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/advance_us",
            "value": 22.190000000023247,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/cancel_us",
            "value": 1.1600000000271393,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1733.1219999999803,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/advance_us",
            "value": 3.1510000000025684,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 358.8640000000396,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1759.3200000000024,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/advance_us",
            "value": 8.7669999999207,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 380.01500000007127,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1700.5960000000186,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/advance_us",
            "value": 46.436999999968975,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 312.08300000002964,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1747.002000000066,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 336.96900000006735,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 6.36799999995219,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/arm_us",
            "value": 274055.578,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/advance_us",
            "value": 16.031000000111817,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 12301.315000000159,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/arm_us",
            "value": 284619.28399999987,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/advance_us",
            "value": 51.56399999987116,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13038.265000000138,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/arm_us",
            "value": 276495.4829999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/advance_us",
            "value": 332.8509999992093,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 12726.934000000256,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 274168.40600000066,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 2637.673000000177,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10219.98799999983,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/arm_us",
            "value": 81.48999999957596,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/advance_us",
            "value": 43.893000000025495,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/cancel_us",
            "value": 151.0230000003503,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/arm_us",
            "value": 56.692000000111875,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/advance_us",
            "value": 118.02400000033231,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/cancel_us",
            "value": 122.77600000015809,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/arm_us",
            "value": 55.164000000331725,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/advance_us",
            "value": 674.2139999996652,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/cancel_us",
            "value": 71.05099999989761,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/arm_us",
            "value": 816.8930000001637,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/advance_us",
            "value": 47.949000000699016,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1474.4670000000042,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/arm_us",
            "value": 639.6070000000691,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/advance_us",
            "value": 113.63299999993615,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1354.7060000000783,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/arm_us",
            "value": 578.1719999995403,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/advance_us",
            "value": 724.9700000002122,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1342.7879999999277,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 773.2710000000225,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 6680.186999999933,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 708.2030000001396,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/arm_us",
            "value": 8395.782999999938,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/advance_us",
            "value": 93.3629999999539,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 17956.94800000001,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/arm_us",
            "value": 8547.669000000496,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/advance_us",
            "value": 226.73799999938637,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 19966.965999999957,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/arm_us",
            "value": 10602.506999999605,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/advance_us",
            "value": 873.712999999043,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 17739.722000000256,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 8975.578999999925,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 10791.424000000916,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 15852.704999999332,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/arm_us",
            "value": 57.388999999602675,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/advance_us",
            "value": 19.68699999997625,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/cancel_us",
            "value": 29.606000000057975,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/arm_us",
            "value": 58.06000000120548,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/advance_us",
            "value": 79.64299999912328,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/cancel_us",
            "value": 29.886000000260537,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/arm_us",
            "value": 67.42800000029092,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/advance_us",
            "value": 653.983000000153,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/cancel_us",
            "value": 5.670999998983461,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1726.1629999993602,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/advance_us",
            "value": 38.373999999748776,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 372.76099999871803,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1768.9449999998033,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/advance_us",
            "value": 114.35199999868928,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 375.8719999987079,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1755.7140000008076,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/advance_us",
            "value": 688.5650000003807,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 353.46600000048056,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1844.7639999994863,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 6679.93099999876,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 9.415000000444707,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/arm_us",
            "value": 306146.34900000057,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/advance_us",
            "value": 162.38099999827682,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13029.71499999876,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/arm_us",
            "value": 284675.6550000009,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/advance_us",
            "value": 538.2939999999508,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13307.217000001401,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/arm_us",
            "value": 285622.5519999989,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/advance_us",
            "value": 1525.1890000017738,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 12946.063999999751,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 280732.4179999996,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 10272.70800000042,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10454.713999999512,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1/decoded=1/us_per_fragment",
            "value": 21.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=64/decoded=64/us_per_fragment",
            "value": 38.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1024/decoded=1024/us_per_fragment",
            "value": 163.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=4294967295/decoded=0/us_per_fragment",
            "value": 6.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1/decoded=1/us_per_fragment",
            "value": 51.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=64/decoded=64/us_per_fragment",
            "value": 55.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1024/decoded=1024/us_per_fragment",
            "value": 151.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=4294967295/decoded=0/us_per_fragment",
            "value": 5.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/us",
            "value": 3069.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/us",
            "value": 911.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/us",
            "value": 1323.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/us",
            "value": 285.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/us",
            "value": 1359.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/us",
            "value": 292.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/us",
            "value": 3462.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/us",
            "value": 1108.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/us",
            "value": 3107.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/us",
            "value": 1491.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/us",
            "value": 3160.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/us",
            "value": 882.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/us",
            "value": 10680.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/us",
            "value": 2533.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/us",
            "value": 9813.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/us",
            "value": 2546.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/us",
            "value": 9923.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/us",
            "value": 3319.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=1/retained_bytes=-32014/deliver_us",
            "value": 426.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=8/retained_bytes=78092/deliver_us",
            "value": 271,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=1/queued=64/retained_bytes=163563/deliver_us",
            "value": 261.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=1/retained_bytes=288900/deliver_us",
            "value": 281.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=8/retained_bytes=399597/deliver_us",
            "value": 294.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=16/queued=64/retained_bytes=642772/deliver_us",
            "value": 285.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=1/retained_bytes=965591/deliver_us",
            "value": 263.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=8/retained_bytes=1196744/deliver_us",
            "value": 302.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/tracks=64/queued=64/retained_bytes=3441112/deliver_us",
            "value": 284.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle/size_bytes",
            "value": 107442,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle_gzip/size_bytes",
            "value": 32225,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 7052,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 2638,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 2628,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 2497,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 2398,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 2627,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 2925,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 2566,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 2007,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 2063,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 2603,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 2914,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/seal_us",
            "value": 36.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/open_us",
            "value": 33.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/seal_us",
            "value": 34.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/open_us",
            "value": 34.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/seal_us",
            "value": 35.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/open_us",
            "value": 33.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/seal_us",
            "value": 37.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/open_us",
            "value": 36.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/seal_us",
            "value": 37.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/open_us",
            "value": 36.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/seal_us",
            "value": 37.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/open_us",
            "value": 35.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/seal_us",
            "value": 59.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/open_us",
            "value": 50.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/seal_us",
            "value": 58.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/open_us",
            "value": 50.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/seal_us",
            "value": 57.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/open_us",
            "value": 48.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/seal_us",
            "value": 292.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/open_us",
            "value": 220.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/seal_us",
            "value": 227.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/open_us",
            "value": 160.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/seal_us",
            "value": 238.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/open_us",
            "value": 212.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=8/update_us",
            "value": 271.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=32/update_us",
            "value": 352.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=128/update_us",
            "value": 756,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=8/update_us",
            "value": 170.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=32/update_us",
            "value": 235.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=128/update_us",
            "value": 775.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=8/update_us",
            "value": 162.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=32/update_us",
            "value": 316.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=128/update_us",
            "value": 836.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=8/update_us",
            "value": 97.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=32/update_us",
            "value": 252.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=128/update_us",
            "value": 756.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=8/update_us",
            "value": 83.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=32/update_us",
            "value": 245.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=128/update_us",
            "value": 749.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=8/update_us",
            "value": 68.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=32/update_us",
            "value": 204.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=128/update_us",
            "value": 731.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=1/watch_us",
            "value": 79.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=8/watch_us",
            "value": 148.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=32/watch_us",
            "value": 380.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=1/watch_us",
            "value": 62.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=8/watch_us",
            "value": 127.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=32/watch_us",
            "value": 407.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=1/watch_us",
            "value": 68.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=8/watch_us",
            "value": 160.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=32/watch_us",
            "value": 593.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/ns_per_frame",
            "value": 4452,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/first_frame_us",
            "value": 9.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 795,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 792,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 26.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 792,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 27.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 5383,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 10.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1150,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 15.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 784,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 27.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 788,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 26.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 6070,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 11.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 5537,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 10.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1421,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 22.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 788,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 27.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 805,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1514.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/ns_per_frame",
            "value": 7567,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/first_frame_us",
            "value": 51.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 1728,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 65.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1234,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 41.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1349,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 50.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 7438,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 28.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1735,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 32.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1468,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 54.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1121,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 36.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 9319,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 25.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 7764,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 23.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1773,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 33.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1779,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 51.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 740,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 1374.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=in/ns_per_frame",
            "value": 165,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=reordered/ns_per_frame",
            "value": 59.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=in/ns_per_frame",
            "value": 127.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=reordered/ns_per_frame",
            "value": 55.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=in/ns_per_frame",
            "value": 146.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=reordered/ns_per_frame",
            "value": 60.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=in/ns_per_frame",
            "value": 165.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=reordered/ns_per_frame",
            "value": 68.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=none/ms_per_update",
            "value": 0.003561,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/compression=deflate/ms_per_update",
            "value": 0.070853,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=none/ms_per_update",
            "value": 0.004511,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/compression=deflate/ms_per_update",
            "value": 0.056216,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=none/ms_per_update",
            "value": 0.004771,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/compression=deflate/ms_per_update",
            "value": 0.06965,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=none/ms_per_update",
            "value": 0.021024,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/compression=deflate/ms_per_update",
            "value": 0.071166,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=none/ms_per_update",
            "value": 0.02035,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/compression=deflate/ms_per_update",
            "value": 0.082703,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=none/ms_per_update",
            "value": 0.630472,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/compression=deflate/ms_per_update",
            "value": 0.697204,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=none/ms_per_update",
            "value": 0.64106,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/compression=deflate/ms_per_update",
            "value": 0.718639,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/json_parse_us",
            "value": 2.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/parse_us",
            "value": 3.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/json_parse_us",
            "value": 2.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/parse_us",
            "value": 4.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/json_parse_us",
            "value": 22.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/parse_us",
            "value": 40.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/json_parse_us",
            "value": 339.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/parse_us",
            "value": 538.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=none/ns_per_record",
            "value": 3724.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 54701.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=none/ns_per_record",
            "value": 5537.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 40580.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=none/ns_per_record",
            "value": 1151.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compression=deflate/ns_per_record",
            "value": 27767.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=none/ns_per_record",
            "value": 2623.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compression=deflate/ns_per_record",
            "value": 21856.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/encode_ns",
            "value": 66109,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/decode_ns",
            "value": 9222,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/encode_ns",
            "value": 66181,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/decode_ns",
            "value": 9702,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/encode_ns",
            "value": 55103,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/decode_ns",
            "value": 7507,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/encode_ns",
            "value": 55330,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/decode_ns",
            "value": 7908,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/encode_ns",
            "value": 5341,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/decode_ns",
            "value": 2028,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/encode_ns",
            "value": 5248,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/decode_ns",
            "value": 1956,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/encode_ns",
            "value": 12399,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/decode_ns",
            "value": 5280,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/encode_ns",
            "value": 14068,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=28/decode_ns",
            "value": 5790,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/encode_ns",
            "value": 2599,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/decode_ns",
            "value": 1719,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/encode_ns",
            "value": 2629,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=8/decode_ns",
            "value": 1685,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/encode_ns",
            "value": 9729,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/decode_ns",
            "value": 5622,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/encode_ns",
            "value": 9576,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/decode_ns",
            "value": 5005,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=0/held_estimates=1/update_us",
            "value": 14.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=1/held_estimates=1/update_us",
            "value": 13.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=8/held_estimates=1/update_us",
            "value": 26.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=64/held_estimates=1/update_us",
            "value": 116.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=0/held_estimates=32/update_us",
            "value": 11.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=1/held_estimates=32/update_us",
            "value": 13.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=8/held_estimates=32/update_us",
            "value": 25.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=64/held_estimates=32/update_us",
            "value": 119.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=0/held_estimates=256/update_us",
            "value": 10.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=1/held_estimates=256/update_us",
            "value": 13.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=8/held_estimates=256/update_us",
            "value": 24.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=64/held_estimates=256/update_us",
            "value": 121.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=0/held_estimates=0/update_us",
            "value": 3.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=1/held_estimates=1/update_us",
            "value": 12.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=8/held_estimates=1/update_us",
            "value": 26.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=64/held_estimates=1/update_us",
            "value": 169.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=0/held_estimates=0/update_us",
            "value": 3.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=1/held_estimates=32/update_us",
            "value": 11.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=8/held_estimates=32/update_us",
            "value": 25.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=64/held_estimates=32/update_us",
            "value": 163.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=0/held_estimates=0/update_us",
            "value": 3.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=1/held_estimates=256/update_us",
            "value": 11.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=8/held_estimates=256/update_us",
            "value": 26.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=64/held_estimates=256/update_us",
            "value": 174.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=1024/records=3/elapsed_ms",
            "value": 4.282,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=16384/records=4/elapsed_ms",
            "value": 0.737,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=1/bytes_per_stream=262144/records=19/elapsed_ms",
            "value": 2.586,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=1024/records=17/elapsed_ms",
            "value": 1.608,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=16384/records=25/elapsed_ms",
            "value": 2.373,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=8/bytes_per_stream=262144/records=145/elapsed_ms",
            "value": 13.025,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=1024/records=129/elapsed_ms",
            "value": 6.354,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=16384/records=193/elapsed_ms",
            "value": 8.02,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/p2p/streams=64/bytes_per_stream=262144/records=1154/elapsed_ms",
            "value": 51.163,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=4/ns_per_change",
            "value": 4667.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=16/ns_per_change",
            "value": 6054.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=64/ns_per_change",
            "value": 24878.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=4/ns_per_change",
            "value": 321.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=16/ns_per_change",
            "value": 2370.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=64/ns_per_change",
            "value": 15407.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=4/ns_per_change",
            "value": 161.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=16/ns_per_change",
            "value": 1443.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=64/ns_per_change",
            "value": 15374.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1025/kind=stream/frames=1/us_per_record",
            "value": 11.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=16/us_per_record",
            "value": 37.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=256/us_per_record",
            "value": 243.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=empty/frames=256/us_per_record",
            "value": 190.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=max_data/frames=204/us_per_record",
            "value": 87.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16381/kind=stream/frames=1/us_per_record",
            "value": 7.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16384/kind=stream/frames=16/us_per_record",
            "value": 19.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16128/kind=stream/frames=256/us_per_record",
            "value": 237.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=empty/frames=4095/us_per_record",
            "value": 3715.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=max_data/frames=3276/us_per_record",
            "value": 1076,
            "unit": "us"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1200/chunks=14/ns_per_byte",
            "value": 0.94,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=16384/chunks=1/ns_per_byte",
            "value": 0.24,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.063,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1200/chunks=219/ns_per_byte",
            "value": 0.423,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=16384/chunks=16/ns_per_byte",
            "value": 0.251,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1200/chunks=874/ns_per_byte",
            "value": 0.526,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=16384/chunks=64/ns_per_byte",
            "value": 0.231,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.001,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=1/refresh_us",
            "value": 433.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=8/refresh_us",
            "value": 485.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=32/refresh_us",
            "value": 638.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=1/refresh_us",
            "value": 221.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=8/refresh_us",
            "value": 313.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=32/refresh_us",
            "value": 501.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=1/refresh_us",
            "value": 148.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=8/refresh_us",
            "value": 205.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=32/refresh_us",
            "value": 572.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=1/refresh_us",
            "value": 246.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=8/refresh_us",
            "value": 800.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=32/refresh_us",
            "value": 2554.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=1/refresh_us",
            "value": 206.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=8/refresh_us",
            "value": 721.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=32/refresh_us",
            "value": 2445.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=1/refresh_us",
            "value": 235.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=8/refresh_us",
            "value": 775.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=32/refresh_us",
            "value": 2525.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=1/refresh_us",
            "value": 5359.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=8/refresh_us",
            "value": 45639.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=32/refresh_us",
            "value": 169847.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=1/refresh_us",
            "value": 5586.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=8/refresh_us",
            "value": 41745.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=32/refresh_us",
            "value": 169334.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=1/refresh_us",
            "value": 5359.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=8/refresh_us",
            "value": 41383,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=32/refresh_us",
            "value": 171416.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 2.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 22.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 49848.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 8.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 86.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 352372.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 21.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 297.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=ordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 1139219.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=8/accepted=8/admit_us",
            "value": 6.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=128/accepted=128/admit_us",
            "value": 48.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 85922.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=8/accepted=64/admit_us",
            "value": 21.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 268.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 650831.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=8/accepted=256/admit_us",
            "value": 71.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1244.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=reordered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 2502019.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=8/accepted=8/admit_us",
            "value": 3.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=128/accepted=128/admit_us",
            "value": 47.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=1/window=220000/accepted=220000/admit_us",
            "value": 148001.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=8/accepted=64/admit_us",
            "value": 17.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=128/accepted=1024/admit_us",
            "value": 324.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=8/window=220000/accepted=1760000/admit_us",
            "value": 1183308.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=8/accepted=256/admit_us",
            "value": 73.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=128/accepted=4096/admit_us",
            "value": 1469.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/mode=scattered/sessions=32/window=220000/accepted=7040000/admit_us",
            "value": 4683946.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 1.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 17.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 22134.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 5.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 86.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 106124.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 16.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 252.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-ordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 426218.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 4.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 47.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 65552.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 17.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 287.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 509221.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 69.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1187.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-reordered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 2029059.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=8/accepted=8/admit_us",
            "value": 2.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=128/accepted=128/admit_us",
            "value": 46.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=1/requests=220000/accepted=220000/admit_us",
            "value": 134908.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=8/accepted=64/admit_us",
            "value": 18.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=128/accepted=1024/admit_us",
            "value": 366.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=8/requests=220000/accepted=1760000/admit_us",
            "value": 1102193.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=8/accepted=256/admit_us",
            "value": 75.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=128/accepted=4096/admit_us",
            "value": 1684.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/request-ids/modern_mode=modern-scattered/sessions=32/requests=220000/accepted=7040000/admit_us",
            "value": 4898257.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=1/update_us",
            "value": 33.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=8/update_us",
            "value": 49.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=32/update_us",
            "value": 102.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=1/update_us",
            "value": 26.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=8/update_us",
            "value": 40.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=32/update_us",
            "value": 100.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=1/update_us",
            "value": 40.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=8/update_us",
            "value": 59.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=32/update_us",
            "value": 129.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=1/update_us",
            "value": 14.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=8/update_us",
            "value": 14.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=32/update_us",
            "value": 16.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=1/update_us",
            "value": 17.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=8/update_us",
            "value": 19.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=32/update_us",
            "value": 18.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=1/update_us",
            "value": 33.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=8/update_us",
            "value": 34.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=32/update_us",
            "value": 34.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=1/cancel_us",
            "value": 24.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=8/cancel_us",
            "value": 88.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=32/cancel_us",
            "value": 137.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=1/cancel_us",
            "value": 7.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=8/cancel_us",
            "value": 41.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=32/cancel_us",
            "value": 103.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=1/cancel_us",
            "value": 8.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=8/cancel_us",
            "value": 31.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=32/cancel_us",
            "value": 101.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=0/cancel_us",
            "value": 3.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=128/cancel_us",
            "value": 3.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=0/cancel_us",
            "value": 2.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=128/cancel_us",
            "value": 3.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=0/cancel_us",
            "value": 3.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=128/cancel_us",
            "value": 5.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=0/cancel_us",
            "value": 19.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=128/cancel_us",
            "value": 16.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/active_ms",
            "value": 2.96,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/settled_ms",
            "value": 4.42,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/active_ms",
            "value": 9.25,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/settled_ms",
            "value": 15.21,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/active_ms",
            "value": 14.38,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/settled_ms",
            "value": 20.94,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/active_ms",
            "value": 41.28,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/settled_ms",
            "value": 67.44,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/active_ms",
            "value": 65.79,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/settled_ms",
            "value": 96.34,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/active_ms",
            "value": 190.01,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/settled_ms",
            "value": 288.19,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/active_ms",
            "value": 3.49,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/settled_ms",
            "value": 5.07,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/active_ms",
            "value": 10.15,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/settled_ms",
            "value": 16.98,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/active_ms",
            "value": 16.35,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/settled_ms",
            "value": 22.35,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/active_ms",
            "value": 46.82,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/settled_ms",
            "value": 72.04,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/active_ms",
            "value": 73.47,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/settled_ms",
            "value": 99.96,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/active_ms",
            "value": 203.17,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/settled_ms",
            "value": 303.55,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/active_ms",
            "value": 5.04,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/settled_ms",
            "value": 5.05,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/active_ms",
            "value": 3.59,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/settled_ms",
            "value": 3.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/active_ms",
            "value": 15.01,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/settled_ms",
            "value": 15.01,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/active_ms",
            "value": 16.09,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/settled_ms",
            "value": 16.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/active_ms",
            "value": 76.11,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/settled_ms",
            "value": 76.12,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/active_ms",
            "value": 75.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/settled_ms",
            "value": 75.41,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/active_us",
            "value": 9.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/settled_us",
            "value": 16.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/active_us",
            "value": 123.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/settled_us",
            "value": 221.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/active_us",
            "value": 2036.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/settled_us",
            "value": 3443.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/active_us",
            "value": 10.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/settled_us",
            "value": 18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/active_us",
            "value": 123.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/settled_us",
            "value": 233.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/active_us",
            "value": 2019.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/settled_us",
            "value": 3353.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/active_us",
            "value": 17.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/settled_us",
            "value": 28.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/active_us",
            "value": 114.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/settled_us",
            "value": 222.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/active_us",
            "value": 2028.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/settled_us",
            "value": 3442.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/active_us",
            "value": 10.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/settled_us",
            "value": 15.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/active_us",
            "value": 101.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/settled_us",
            "value": 223.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/active_us",
            "value": 2165.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/settled_us",
            "value": 3460.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/active_us",
            "value": 6.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/settled_us",
            "value": 13.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/active_us",
            "value": 108.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/settled_us",
            "value": 204.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/active_us",
            "value": 1977.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/settled_us",
            "value": 3293.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/active_us",
            "value": 9.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/settled_us",
            "value": 20.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/active_us",
            "value": 106.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/settled_us",
            "value": 195.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/active_us",
            "value": 2055.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/settled_us",
            "value": 3468.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=1/update_us",
            "value": 544.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=8/update_us",
            "value": 1040.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=1/update_us",
            "value": 1339.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=8/update_us",
            "value": 8668.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=1/update_us",
            "value": 4007.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=8/update_us",
            "value": 28787.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=1/update_us",
            "value": 102.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=8/update_us",
            "value": 593.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=1/update_us",
            "value": 1051.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=8/update_us",
            "value": 7280.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=1/update_us",
            "value": 3767.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=8/update_us",
            "value": 30546.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/direct_us",
            "value": 3.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/front_us",
            "value": 5.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/fork_us",
            "value": 5.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/direct_us",
            "value": 1.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/front_us",
            "value": 3.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/fork_us",
            "value": 3.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/direct_us",
            "value": 1.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/front_us",
            "value": 3.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/fork_us",
            "value": 2.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/direct_us",
            "value": 2.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/front_us",
            "value": 4.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/fork_us",
            "value": 4.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/direct_us",
            "value": 1.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/front_us",
            "value": 3.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/fork_us",
            "value": 3.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/direct_us",
            "value": 1.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/front_us",
            "value": 2.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/fork_us",
            "value": 3.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/direct_us",
            "value": 3.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/front_us",
            "value": 5.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/fork_us",
            "value": 5.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/direct_us",
            "value": 2.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/front_us",
            "value": 3.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/fork_us",
            "value": 3.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/direct_us",
            "value": 1.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/front_us",
            "value": 3.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/fork_us",
            "value": 3.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=1/flap_us",
            "value": 79.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=16/flap_us",
            "value": 45.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=64/flap_us",
            "value": 25.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=1/flap_us",
            "value": 21.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=16/flap_us",
            "value": 11.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=64/flap_us",
            "value": 7.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=1/flap_us",
            "value": 12.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=16/flap_us",
            "value": 4.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=64/flap_us",
            "value": 3.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=0/readable_us",
            "value": 6.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=0/readable_us",
            "value": 5.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=0/readable_us",
            "value": 2.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1/readable_us",
            "value": 3.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1/readable_us",
            "value": 2.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1/readable_us",
            "value": 1.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=64/readable_us",
            "value": 6.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=64/readable_us",
            "value": 2.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=64/readable_us",
            "value": 2.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1024/readable_us",
            "value": 84.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1024/readable_us",
            "value": 52.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1024/readable_us",
            "value": 50.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=1/us_per_datagram",
            "value": 0.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=1/us_per_datagram",
            "value": 0.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=1/us_per_datagram",
            "value": 0.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=64/us_per_datagram",
            "value": 0.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=64/us_per_datagram",
            "value": 0.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=64/us_per_datagram",
            "value": 0.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=1/retained=4096/us_per_datagram",
            "value": 0.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=4/retained=4096/us_per_datagram",
            "value": 0.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/datagram_readers=16/retained=4096/us_per_datagram",
            "value": 0.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/signals/op=new-error/ns_per_op",
            "value": 274,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-close/ns_per_op",
            "value": 2320,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-get-close/ns_per_op",
            "value": 2643,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/slow-group/groups=1/warnings=1/bytes=51/catchup_ms",
            "value": 1.338,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=16/warnings=1/bytes=53/catchup_ms",
            "value": 1.051,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=256/warnings=1/bytes=55/catchup_ms",
            "value": 6.066,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=1024/warnings=1/bytes=57/catchup_ms",
            "value": 21.461,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=1/groups=128/drop_us",
            "value": 96.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=4/groups=128/drop_us",
            "value": 51.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=16/groups=128/drop_us",
            "value": 49.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=1/groups=128/drop_us",
            "value": 43.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=4/groups=128/drop_us",
            "value": 43.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=16/groups=128/drop_us",
            "value": 46.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=1/groups=128/drop_us",
            "value": 42.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=4/groups=128/drop_us",
            "value": 46.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=16/groups=128/drop_us",
            "value": 50.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=1/track_added_us",
            "value": 369.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=4/track_added_us",
            "value": 431.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=1/subscribers=16/track_added_us",
            "value": 634.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=1/track_added_us",
            "value": 83.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=4/track_added_us",
            "value": 163.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=16/subscribers=16/track_added_us",
            "value": 564.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=1/track_added_us",
            "value": 63.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=4/track_added_us",
            "value": 151.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-tracks/broadcasts=128/subscribers=16/track_added_us",
            "value": 540.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/publish_us",
            "value": 35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/end_us",
            "value": 11.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/idle_us",
            "value": 52.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/publish_us",
            "value": 11.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/end_us",
            "value": 10.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/idle_us",
            "value": 105.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/publish_us",
            "value": 14.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/end_us",
            "value": 12.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/idle_us",
            "value": 378.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/publish_us",
            "value": 15.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/end_us",
            "value": 14.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/idle_us",
            "value": 1454.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/publish_us",
            "value": 24.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/end_us",
            "value": 13.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/idle_us",
            "value": 50.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/publish_us",
            "value": 24.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/end_us",
            "value": 11.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/idle_us",
            "value": 141.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/publish_us",
            "value": 24.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/end_us",
            "value": 13.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/idle_us",
            "value": 608.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/publish_us",
            "value": 23.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/end_us",
            "value": 21.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/idle_us",
            "value": 3711.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/publish_us",
            "value": 60.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/end_us",
            "value": 22.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/idle_us",
            "value": 102,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/publish_us",
            "value": 60.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/end_us",
            "value": 25.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/idle_us",
            "value": 435.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/publish_us",
            "value": 61.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/end_us",
            "value": 28.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/idle_us",
            "value": 1910.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/publish_us",
            "value": 56.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/end_us",
            "value": 32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/idle_us",
            "value": 11689.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/publish_us",
            "value": 144,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/end_us",
            "value": 11.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/idle_us",
            "value": 133.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/publish_us",
            "value": 145.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/end_us",
            "value": 11.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/idle_us",
            "value": 189.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/publish_us",
            "value": 144.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/end_us",
            "value": 10.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/idle_us",
            "value": 431.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/publish_us",
            "value": 158.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/end_us",
            "value": 14.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/idle_us",
            "value": 1921.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/publish_us",
            "value": 827.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/end_us",
            "value": 16.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/idle_us",
            "value": 239.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/publish_us",
            "value": 868,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/end_us",
            "value": 16.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/idle_us",
            "value": 350,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/publish_us",
            "value": 804.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/end_us",
            "value": 17.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/idle_us",
            "value": 874.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/publish_us",
            "value": 732.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/end_us",
            "value": 17.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/idle_us",
            "value": 4015.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/publish_us",
            "value": 3214.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/end_us",
            "value": 27.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/idle_us",
            "value": 580.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/publish_us",
            "value": 3085.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/end_us",
            "value": 26.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/idle_us",
            "value": 1004,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/publish_us",
            "value": 2906.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/end_us",
            "value": 27.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/idle_us",
            "value": 2762.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/publish_us",
            "value": 2823.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/end_us",
            "value": 32.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/idle_us",
            "value": 13796.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/publish_us",
            "value": 100.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/end_us",
            "value": 9.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/idle_us",
            "value": 121.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/publish_us",
            "value": 107,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/end_us",
            "value": 9.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/idle_us",
            "value": 163.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/publish_us",
            "value": 114.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/end_us",
            "value": 9.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/idle_us",
            "value": 392.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/publish_us",
            "value": 101.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/end_us",
            "value": 10.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/idle_us",
            "value": 1561.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/publish_us",
            "value": 451.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/end_us",
            "value": 20.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/idle_us",
            "value": 236.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/publish_us",
            "value": 461.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/end_us",
            "value": 21.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/idle_us",
            "value": 338.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/publish_us",
            "value": 433.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/end_us",
            "value": 22.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/idle_us",
            "value": 878,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/publish_us",
            "value": 408.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/end_us",
            "value": 25.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/idle_us",
            "value": 4134,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/publish_us",
            "value": 1871.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/end_us",
            "value": 54.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/idle_us",
            "value": 567,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/publish_us",
            "value": 1809.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/end_us",
            "value": 49.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/idle_us",
            "value": 1006.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/publish_us",
            "value": 1841.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/end_us",
            "value": 52.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/idle_us",
            "value": 3106.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/publish_us",
            "value": 1810.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/end_us",
            "value": 59.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/idle_us",
            "value": 14171.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=encode/ns_per_op",
            "value": 48.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode-varint/ns_per_op",
            "value": 7.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=encode/ns_per_op",
            "value": 48.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode/ns_per_op",
            "value": 8.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode-varint/ns_per_op",
            "value": 8.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=encode/ns_per_op",
            "value": 52.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode/ns_per_op",
            "value": 7.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode-varint/ns_per_op",
            "value": 8.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=encode/ns_per_op",
            "value": 49.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode/ns_per_op",
            "value": 17,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode-varint/ns_per_op",
            "value": 11.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=encode/ns_per_op",
            "value": 49.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode/ns_per_op",
            "value": 5.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode-varint/ns_per_op",
            "value": 11.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=encode/ns_per_op",
            "value": 50.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode/ns_per_op",
            "value": 8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode-varint/ns_per_op",
            "value": 12.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=encode/ns_per_op",
            "value": 54.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode/ns_per_op",
            "value": 8.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode-varint/ns_per_op",
            "value": 12.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=encode/ns_per_op",
            "value": 60.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode/ns_per_op",
            "value": 21.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode-varint/ns_per_op",
            "value": 15.4,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}