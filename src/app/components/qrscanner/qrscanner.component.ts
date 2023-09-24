import { Component } from '@angular/core';
import BarcodeFormat from '@zxing/library/esm/core/BarcodeFormat';
import { ScanService } from '../../services/scan/scan.service';
import { Helper } from '../../helper';
import { LoaderService } from '../../services/loader/loader.service';
import { Constants } from '../../constants';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent {
  constructor(private scanService: ScanService, private loader: LoaderService) { }
  allowedFormats = [BarcodeFormat.QR_CODE];
  qrResultString: string = "";
  hasDevices: boolean = false;
  hasPermission: boolean = false;
  availableDevices: MediaDeviceInfo[] = [];
  deviceCurrent?: MediaDeviceInfo;
  deviceSelected: string = "";
  onDeviceSelectChange(e: { target: { value: any; }; }) {
    console.log(e.target.value);
    const selected = e.target.value;
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }
  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }
  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
    if (Helper.isValidSffScan(resultString)) {
      this.loader.setLoading(true);
      this.scanService.postScanData(resultString).subscribe({
        next: data => {
          console.log(data);
          this.loader.setLoading(false);
          alert("Thank you! We will be in touch with you soon.");
        },
        error: error => {
          console.log(error);
          this.loader.setLoading(false);
          alert(error.message);
        }
      });
    } else {
      alert("Invalid qr code format! Please try again.");
    }
  }
}
