*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    https://reg.buu.ac.th/registrar/home.asp
${Teacher's name}    WANTANA 

*** Test Cases ***
Enter only teacher's name .
    Go To Link    ${URL}
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[1]/div[2]/ul/li[5]/a
    Input text by xpath    /html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/form/table[1]/tbody/tr[2]/td[2]/input[1]    ${Teacher's name}
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/form/table[1]/tbody/tr[2]/td[2]/input[2]
    Sleep    5s
    Close Browser

Show teacher table by do not enter full name of teacher susscessfully.
    Go To Link    ${URL}
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[1]/div[2]/ul/li[5]/a
    Input text by xpath    /html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/form/table[1]/tbody/tr[2]/td[2]/input[1]    ${Teacher's name}
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/form/table[1]/tbody/tr[2]/td[2]/input[2]
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/table[2]/tbody/tr[5]/td[4]/a
    Click Link by xpath    xpath:/html/body/div[2]/div/table/tbody/tr/td/div[2]/table[3]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]/font/a[2]
    Sleep    5s
    Close Browser


*** Keywords ***
    
Go To Link
    [Arguments]    ${url}    
    Open Browser    ${url}   firefox

Click Link by xpath
    [Arguments]    ${xpath}    
    Click Element    ${xpath} 

Input text by xpath
    [Arguments]    ${xpath}    ${name}
    Input Text    xpath=${xpath}    ${name}
