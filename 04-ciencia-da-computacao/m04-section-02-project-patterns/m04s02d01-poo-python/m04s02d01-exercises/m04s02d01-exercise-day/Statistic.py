class Statistic:
    def __init__(self, studant_grade_list: list):
        self.studant_grade_list = studant_grade_list
        self.__average = self.grade_average()
        self.__median = self.grades_median()
        self.__mode = self.grades_mode()

    @property
    def studant_grade_list(self):
        return self.__studant_grade_list

    @studant_grade_list.setter
    def studant_grade_list(self, value):
        if not isinstance(value, list):
            raise ValueError(
                f"Should be given a list, instead receive a {type(value)}"
            )
        self.__studant_grade_list = value

    @property
    def average(self):
        return self.__average

    def grade_average(self):
        return sum(self.studant_grade_list) / len(self.studant_grade_list)

    @property
    def median(self):
        return self.__median

    def median_even_calc(self, list_size, ordered_list):
        index_one = (list_size // 2) - 1
        index_two = index_one + 1
        print(ordered_list)
        return (ordered_list[index_one] + ordered_list[index_two]) / 2

    def median_odd_calc(self, list_size, ordered_list):
        index_position = ((list_size + 1) // 2) - 1
        return ordered_list[index_position]

    def grades_median(self):
        ordered_list = sorted(self.__studant_grade_list)
        list_size = len(self.__studant_grade_list)
        if list_size % 2 == 0:
            return self.median_even_calc(list_size, ordered_list)
        else:
            return self.median_odd_calc(list_size, ordered_list)

    @property
    def mode(self):
        return self.__mode

    def grades_mode(self):
        grades_list = self.studant_grade_list
        duplicate_grades = [
            grade for grade in grades_list if grades_list.count(grade) > 1
        ]
        duplicate_grades.sort(reverse=True)
        return duplicate_grades[0] if len(duplicate_grades) > 0 else None
