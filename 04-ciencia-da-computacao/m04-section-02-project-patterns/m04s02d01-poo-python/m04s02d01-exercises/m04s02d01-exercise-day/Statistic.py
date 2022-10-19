class Statistic:
    def __init__(self, studant_grade_list: list):
        self.studant_grade_list = studant_grade_list

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
