from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))
driver.get("https://universe.leagueoflegends.com/tr_TR/story/champion/aatrox/")
driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
time.sleep(2)
with open("champ_name.txt", "r") as f:
    names = f.read().split("\n")
print(names[0])
charSplash = driver.find_element(by=By.XPATH, value="//meta[@property='og:image']")
lifeStory = driver.find_element(by=By.XPATH, value="//meta[@property='og:description']")
print(charSplash.get_attribute("content"))

# file = open("champ_name.txt", "w");
# for name in names:
#    write_name = name.text
#    write_name = write_name.lower()
#    write_name = write_name[0].upper() + write_name[1:len(write_name)]
#    file.write(write_name+"\n")
#    print(write_name)
# file.close()

# driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))

# with open("champ_name.txt", "r") as f:
#     names = f.read().split("\n")
# print(names)

# for name in names:
#    driver.get("https://universe.leagueoflegends.com/tr_TR/story/champion/" + name)
#    story = driver.find_elements(by=By.TAG_NAME, value="h1")

# driver.get("https://universe.leagueoflegends.com/tr_TR/story/champion/Illaoi")
# story = driver.find_elements(by=By.CLASS_NAME, value="p_1_sJ")
# for st in story:
# print(st.text)
