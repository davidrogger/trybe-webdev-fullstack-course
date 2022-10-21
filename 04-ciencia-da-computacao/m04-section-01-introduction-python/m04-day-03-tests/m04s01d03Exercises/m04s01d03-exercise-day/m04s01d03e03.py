import re


def email_validation(email):
    regex = re.compile(r"([\w\d]+[-_])*[\w]+@[\w\d]+(\.[\w]{3})+")
    isValid = re.fullmatch(regex, email)

    if not isValid:
        raise ValueError("Invalid email")

    return email

# Gabarito =>

# def validate_email(email):
#     index = 0
#     if not email[index].isalpha():
#         raise ValueError("Username should starts with a letter")

#     # validate username
#     while email[index] != "@" and index < len(email):
#         letter = email[index]
#         if (
#             not letter.isalpha()
#             and not letter.isdigit()
#             and letter not in ("_", "-")
#         ):
#             raise ValueError(
#                 "Username should contains only letters, "
#                 "digits, dashes or underscores"
#             )
#         index += 1
#     index += 1  # @
#     # validate website
#     while email[index] != "." and index < len(email):
#         letter = email[index]
#         if not letter.isalpha() and not letter.isdigit():
#             raise ValueError(
#                 "Website should contains only letters, and digits"
#             )
#         index += 1

#     index += 1  # .
#     # validate extension
#     counter = 0
#     while index < len(email):
#         counter += 1
#         index += 1
#     if counter > 3:
#         raise ValueError("Extension maximum length is 3")
#     return None
