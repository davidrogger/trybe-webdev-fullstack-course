languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# print(list(enumerate_prime))

for index, language in enumerate_prime:
    print(f'{index} - {language}')
