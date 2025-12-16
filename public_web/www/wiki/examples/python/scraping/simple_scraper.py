
import sys, time, re
from urllib.request import Request, urlopen
from urllib.parse import urljoin
from html.parser import HTMLParser

class LinkParser(HTMLParser):
    def __init__(self): super().__init__(); self.links=[]
    def handle_starttag(self, tag, attrs):
        if tag=='a':
            href=dict(attrs).get('href')
            if href: self.links.append(href)

url = sys.argv[1]
req = Request(url, headers={'User-Agent':'WikiScraper/1.0'})
html = urlopen(req, timeout=10).read().decode('utf-8','ignore')
p = LinkParser(); p.feed(html)
for href in p.links[:20]:
    print(urljoin(url, href))
time.sleep(1)
