import reactNativeDropdownalert from 'react-native-dropdownalert';

export default class DropDownAlertRef {
  static dropDown: {
    alertWithType: (arg0: any, arg1: any, arg2: any) => void;
  } | null;

  static setDropDown(dropDown: reactNativeDropdownalert | null) {
    this.dropDown = dropDown;
  }

  static getDropDown() {
    return this.dropDown;
  }

  static alert(type: any, title: any, message: any) {
    this.dropDown && this.dropDown.alertWithType(type, title, message);
  }
}
