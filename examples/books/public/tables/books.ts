export default function main() {
    const { Table, Column } = SchemaJS;
    return new Table("books")
        .addColumn(new Column("id").string())
        .addColumn(new Column("name").string())
        .addColumn(new Column("author").string())
}