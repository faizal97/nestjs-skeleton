import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCatMigration1629244487484 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "cats",
      columns: [
        {
          name: "id",
          type: "varchar",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "uuid",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "age",
          type: "int",
        },
        {
          name: "breed",
          type: "varchar",
        },
        {
          name: "created_at",
          type: "datetime",
          isNullable: true,
          default: "CURRENT_TIMESTAMP",
          onUpdate: "CURRENT_TIMESTAMP",
        },
        {
          name: "updated_at",
          type: "datetime",
          isNullable: true,
          default: "CURRENT_TIMESTAMP",
          onUpdate: "CURRENT_TIMESTAMP",
        },
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('heroes')
  }

}
