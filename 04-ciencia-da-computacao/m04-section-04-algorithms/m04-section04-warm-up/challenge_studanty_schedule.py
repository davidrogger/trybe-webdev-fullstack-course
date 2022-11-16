def study_schedule(target_time, permanence_period):
    counter = 0
    try:
        for period in permanence_period:
            start, end = period
            if start <= target_time <= end:
                counter += 1
    except TypeError:
        return None
    else:
        return counter


if __name__ == "__main__":
    permanence_period = [(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5)]
    target_time = 2

    result = study_schedule(target_time, permanence_period)
    print(result)
