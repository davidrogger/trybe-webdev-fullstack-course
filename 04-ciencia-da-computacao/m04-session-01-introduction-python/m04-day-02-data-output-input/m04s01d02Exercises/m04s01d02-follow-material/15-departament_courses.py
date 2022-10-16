import csv

with open("14-graduacao_unb.csv", encoding="utf8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = graduacao_reader

group_by_department = {}
for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1

with open("15-graduacao_report.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)

    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer.writerow(headers)

    for department, grades in group_by_department.items():
        row = [
            department,
            grades,
        ]
        writer.writerow(row)
