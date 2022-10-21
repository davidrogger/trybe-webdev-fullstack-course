from LogsHandler import LogsHandler


class LogInFile(LogsHandler):
    @classmethod
    def log(cls, msg):
        with open("log.txt", "a") as file:
            print(msg, file=file)
