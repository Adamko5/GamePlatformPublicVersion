Every browser request uses one public origin

Traefik routes the web app, platform API and isolated game services without exposing service ports to the browser. HTTP and WebSocket traffic use the same contract.

```mermaid
flowchart TD
    Browser[Browser] --> Gateway[Traefik / Gateway]
    Gateway -->|/| Web[Next.js platform]
    Gateway -->|/api/*| API[Platform API]
    Gateway -->|/game-api/<module>/*| Game[Isolated game service]
    Gateway -->|WebSocket| Game
```
