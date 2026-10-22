window.BENCHMARK_DATA = {
  "lastUpdate": 1792678531709,
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
      }
    ]
  }
}