import requests
import sys
import time
import logging


logging.basicConfig(level=logging.INFO)

logger = logging.getLogger("Health.py")
logger.info("Starting health check")


def parse(r):
    j = r.json()
    try:
        status = j['status']
        if status == 'UP':
            logger.info("Health check was passed")
            exit(0)
        else:
            logger.error('Health check did not pass. Current application status: "%s"' % str(status))
    except KeyError as e:
        logger.error('Key "%s" not defined in json response: "%s"' % (str(e), str(j)))
        exit(1)


url = sys.argv[1]

retries = 30
numRetries = 0

while True:
    try:
        r = requests.get(url)
        if r.status_code == 200:
            parse(r)
    except requests.exceptions.ConnectionError as e:
        logger.debug('Could not connect to "%s", reason: "%s"' % (str(sys.argv), str(e)))

    numRetries += 1

    if numRetries == retries:
        logger.info("Max retries reached, could not connect.")
        logger.info("exiting program")
        exit(1)

    logger.info("retrying...")
    time.sleep(1)

