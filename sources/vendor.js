import { Vendors } from "../models/vendors";
export default function getVendor() {
    if(window) {
        let vendor = window?.navigator?.vendor;
        return checkVendor(vendor);
    }
}

function checkVendor(vendor) {
    if(vendor) {
        switch(vendor) {
            case Vendors.Firefox:
                return 'Mozilla Firefox';
            case Vendors.Google:
                return 'Google';
            case Vendors.Apple:
                return 'Apple';
            default:
                return '';
        }
    }
}