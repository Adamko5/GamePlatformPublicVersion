The platform and each game service meet through explicit contracts.

Manifests, API schemas and shared SDKs keep authentication, sessions, commands and state consistent across independently deployed modules.

```mermaid
flowchart LR
    Manifest[Module manifest] --> Contract[API contract]
    Contract --> Types[Generated frontend types]
    Contract --> SDK[Shared backend SDK]
    Types --> Web[Game frontend]
    SDK --> Service[Game service]
    Platform[Platform API] -->|auth and sessions| Service
```
