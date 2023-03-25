package org.stepdefinition;

import org.base.BaseClass;
import org.junit.After;
import org.junit.Before;

public class HooksClass extends BaseClass {
	
	@Before
	private void preconditiom() {
		launchBrowser();
		windowMaximize();

	}
	
	@After
	private void postcondition() {
		closeEntireBrowser();

	}
	

}
