CACHE_NAME: 'inbox-v1' → 'inbox-v2'（バージョンが変わったと認識させる）
+ skipWaiting() / clients.claim()（即座に新しいSWに切り替える）
+ ネットワーク優先方式（今後は毎回最新を取りに行き、オフライン時だけキャッシュを使う）
