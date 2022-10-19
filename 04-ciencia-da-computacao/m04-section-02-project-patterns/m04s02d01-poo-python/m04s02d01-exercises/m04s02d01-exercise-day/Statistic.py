class Statistic:
    def __init__(self, studant_grade_list: list):
        self.studant_grade_list = studant_grade_list
        self.__average = self.grade_average(self.studant_grade_list)

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

    def grade_average(self, grade_list):
        return sum(grade_list) / len(grade_list)
