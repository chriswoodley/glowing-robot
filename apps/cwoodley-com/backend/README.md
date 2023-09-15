# Backend

## How to Create a Baseline DB Migration

```bash
yarn keystone:prisma migrate diff \
--from-empty \
--to-schema-datamodel schema.prisma \
--script > migrations/0_init/migration.sql
```
