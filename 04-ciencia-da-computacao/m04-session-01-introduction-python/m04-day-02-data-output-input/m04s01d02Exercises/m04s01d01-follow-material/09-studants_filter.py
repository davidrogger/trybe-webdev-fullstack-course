def grade_filter():
    studants_grades_file = open("09-studants_grades.txt", mode="r")
    reproved_studants = []
    for studant_grade in studants_grades_file:
        studant, grade = studant_grade.split(" ")
        if int(grade) < 6:
            reproved_studants.append(studant_grade)

    studants_reproved_file = open("09-studants_reproved.txt", mode="w")
    studants_reproved_file.writelines(reproved_studants)
    studants_reproved_file.close()


grade_filter()
