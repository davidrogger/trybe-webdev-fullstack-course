from m04s01d03e03 import email_validation


def list_valid_emails(emails: list):
    emails_filtered = []

    for email in emails:
        try:
            email_checked = email_validation(email)
            emails_filtered.append(email_checked)
        except ValueError as currentError:
            print(currentError)

    return emails_filtered
