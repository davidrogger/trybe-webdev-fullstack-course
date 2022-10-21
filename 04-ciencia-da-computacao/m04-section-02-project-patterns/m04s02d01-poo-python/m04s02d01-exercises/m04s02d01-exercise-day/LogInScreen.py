from LogsHandler import LogsHandler


class LogInScreen(LogsHandler):
    @classmethod
    def log(cls, msg):
        print(msg)
