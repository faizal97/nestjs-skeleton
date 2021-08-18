import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHeroMigration1629177646020 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "heroes",
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
