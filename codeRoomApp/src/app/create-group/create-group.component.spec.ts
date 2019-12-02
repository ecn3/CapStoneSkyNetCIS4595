import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupComponent } from './create-group.component';

var bottomFieldID = 1;
var offset = 40;
function addAnother() {
  //Change add button to input field
  var addButton = document.getElementById("Button");
  var newMembersField = '<input class="addMembersField" type="text" style="top: 0px;" id="F1">';
  newMembersField = newMembersField.replace("0px", offset.toString() + "px");
  newMembersField = newMembersField.replace("F1", "F" + bottomFieldID.toString());
  
  addButton.outerHTML = newMembersField;
  //Create new add button
  var newAddButton = '<div class="addAnotherButton" onclick="addAnother()" style="top: 0px;" id="Button">+ Add Another Member</div>';
  newAddButton = newAddButton.replace("0px", (offset + 40).toString() + "px");
  //Add new button to container
  var boxElement = document.getElementById("addMembersBox");
  boxElement.append(newAddButton);
  //Increase variables
  bottomFieldID += 1;
  offset += 40;
}

describe('CreateGroupComponent', () => {
  let component: CreateGroupComponent;
  let fixture: ComponentFixture<CreateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
