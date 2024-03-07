using Microsoft.EntityFrameworkCore.Migrations;
using NetTopologySuite.Geometries;

namespace MoviesAPI.Migrations
{
    public partial class MovieTheaters : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("Sqlite:InitSpatialMetaData", true);

            migrationBuilder.CreateTable(
                name: "MoviesTheaters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 75, nullable: false),
                    Location = table.Column<Point>(type: "POINT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MoviesTheaters", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MoviesTheaters");

            migrationBuilder.AlterDatabase()
                .OldAnnotation("Sqlite:InitSpatialMetaData", true);
        }
    }
}
