def study_schedule(target_time, permanence_period):
    pass


if __name__ == "__main__":
    permanence_period = [(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5)]
    target_time = 5

    result = study_schedule(target_time, permanence_period)
    print(result)  # 3
