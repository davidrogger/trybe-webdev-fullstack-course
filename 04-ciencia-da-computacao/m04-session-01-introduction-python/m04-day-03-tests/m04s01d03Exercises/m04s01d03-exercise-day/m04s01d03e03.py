import re


def email_validation(email):
    regex = re.compile(r"([\w\d]+[-_])*[\w]+@[\w\d]+(\.[A-Z|a-z]{3,})+")
    isValid = re.fullmatch(regex, email)

    if not isValid:
        raise ValueError("Invalid email")

    return email
