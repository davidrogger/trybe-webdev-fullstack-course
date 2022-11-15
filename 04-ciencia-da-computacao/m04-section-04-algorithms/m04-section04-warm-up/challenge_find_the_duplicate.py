from quick_sort import quick_sort


def find_duplicate(nums):
    target = 0
    next_target = 1

    try:
        list_size = len(nums)
        quick_sort(nums)

        if nums[0] >= 0 and list_size > 1:
            for _ in range(list_size):
                if nums[target] == nums[next_target]:
                    return nums[target]
                else:
                    move = 1
                    target += move
                    next_target += move

    except (TypeError, IndexError):
        pass

    return False


if __name__ == "__main__":
    tests = [
        {
            "input": [3, 1, 2, 4, 6, 5, 7, 7, 7, 8],
            "expect": 7,
        },
        {
            "input": [],
            "expect": False,
        },
        {
            "input": [1, 10, 6, 50, "a"],
            "expect": False,
        },
        {
            "input": None,
            "expect": False,
        },
        {
            "input": list(range(20)),
            "expect": False,
        },
        {
            "input": [1],
            "expect": False,
        },
        {
            "input": [5, 5],
            "expect": 5,
        },
        {
            "input": [5, 10],
            "expect": False,
        },
        {
            "input": [5, 10, 50, 10, 33, -50],
            "expect": False,
        },
        {
            "input": [1, 3, 4, 2, 2],
            "expect": 2,
        },
        {
            "input": [3, 1, 3, 4, 2],
            "expect": 3,
        },
    ]

    for test in tests:
        parameter, expect = tuple(test.values())
        result = find_duplicate(parameter)

        assert result == expect
