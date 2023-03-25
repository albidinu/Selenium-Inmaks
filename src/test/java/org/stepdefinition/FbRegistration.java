package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.pojo.signINPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.*;

public class FbRegistration extends BaseClass {
    signINPojo s;
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
		
	   
	}

	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
		launchUrl("https://en-gb.facebook.com/");
	    
	}

	@When("To click the creat new account button")
	public void to_click_the_creat_new_account_button() {
		s = new signINPojo();
		clickBtn(s.getCreateNewAcc());
				
	   
	}

	@When("To  pass firstname in firstname text box")
	public void to_pass_firstname_in_firstname_text_box(DataTable d) throws InterruptedException {
		Thread.sleep(3000);
		Map<String, String>  m = d.asMap(String.class,String.class);
		s = new signINPojo();
		passText(m.get("firstname3"),s.getFirstNameTxtBox());
	    
	}

	@When("To pass secondname in secondname text box")
	public void to_pass_secondname_in_secondname_text_box() {
		s = new signINPojo();
		passText("albimorkal",s.getSecondNametxtBox());
		
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable d) {
		List<Map<String, String>> m = d.asMaps();
		s = new signINPojo();
		passText(m.get(1).get("password"),s.getMobileEmailTextBox());
	    
	}

	@When("To creat new password using new password test box")
	public void to_creat_new_password_using_new_password_test_box() {
		s = new signINPojo();
		passText("7874795879",s.getNewpassword());
		
	    
	}

	@Then("T close the chrome browser")
	public void t_close_the_chrome_browser() {
		
	   //closeEntireBrowser();
	}

}
