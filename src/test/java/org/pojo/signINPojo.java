package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class signINPojo extends BaseClass {
	
	public signINPojo() {

	PageFactory.initElements(driver,this);	
		
	}
	public WebElement getCreateNewAcc() {
		return createNewAcc;
	}

	public WebElement getFirstNameTxtBox() {
		return firstNameTxtBox;
	}

	public WebElement getSecondNametxtBox() {
		return secondNametxtBox;
	}

	public WebElement getMobileEmailTextBox() {
		return mobileEmailTextBox;
	}

	public WebElement getNewpassword() {
		return newpassword;
	}
	@FindBy(xpath = "//a[text()='Create new account']")
	private WebElement createNewAcc;
	
	@FindBy(xpath = "(//input[@type='text'])[2]")
	private WebElement firstNameTxtBox ;
	
	@FindBy(name = "lastname")
	private WebElement secondNametxtBox;
	
	@FindBy(name = "reg_email__")
	private WebElement mobileEmailTextBox ;
	
	@FindBy(name = "reg_passwd__")
	private WebElement newpassword;
	
	

	
	
	
	
	
	

}
