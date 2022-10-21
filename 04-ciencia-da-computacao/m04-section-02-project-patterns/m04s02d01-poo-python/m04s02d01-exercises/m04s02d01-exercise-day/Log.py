from datetime import datetime


class Log:
    def __init__(self, handlers):
        self.__handlers = set(handlers)

    def add_handler(self, handler):
        self.__handlers.add(handler)

    def info(self, msg):
        self.__log("INFO", msg)

    def warning(self, msg):
        self.__log("WARNING", msg)

    def error(self, msg):
        self.__log("ERROR", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, nivel, msg):
        for handler in self.__handlers:
            handler.log(self.__format(nivel, msg))

    def __format(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"
