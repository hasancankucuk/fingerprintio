import { Vendors } from "../models";
export default function getVendor() {
    let window = window || this || self;
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