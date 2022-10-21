from abc import ABC, abstractmethod


class LogsHandler(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError
