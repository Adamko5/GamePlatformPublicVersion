# Architecture notes

The platform separates the web shell, platform API, and independently deployable game services.

- The web shell owns navigation, authentication screens, and session entry points.
- The platform API owns identity, sessions, access, and service contracts.
- Game services own game-specific runtime state behind shared SDK boundaries.
- Infrastructure is layered into local Compose, Kubernetes, and AWS Terraform shapes.

Implementation details remain private.

