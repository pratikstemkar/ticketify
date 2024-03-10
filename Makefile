postgresinit:
	docker run --name ticketify-postgres -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -d postgres:16.2

postgres:
	docker exec -it ticketify-postgres psql

createdb:
	docker exec -it ticketify-postgres createdb --username=root --owner=root ticketifydb

dropdb:
	docker exec -it ticketify-postgres dropdb ticketifydb

migrateup:
	migrate -path internal/database/migrations -database "postgresql://root:password@localhost:5432/ticketifydb?sslmode=disable" -verbose up

migratedown:
	migrate -path internal/database/migrations -database "postgresql://root:password@localhost:5433/ticketifydb?sslmode=disable" -verbose down

.PHONY: postgresinit postgres createdb dropdb migrateup migratedown