import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from './coin.model';
import { Mod } from '../models/design.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holomaster',
  templateUrl: './holomaster.component.html',
  styleUrls: ['./holomaster.component.css']
})
export class HolomasterComponent implements OnInit {

  title: string = "HolopediaLi";
  description: string;
  defaultDescription: string = `HoloMedicine
  <br> HoloArt HoloApplications HoloAlgorithm
  <br> HoloSmart HoloSustainability HoloSystems HoloSimulations
  <br> HoloTechnology HoloTherapies HoloTunnels Holotomography
  <br> HoloEducation HoloEmulation
  <br> HoloResearch`

  coins: CoinSettings[] = [
    new CoinSettings(["Research"], { theme:  "purple" }, [], { url: this.getFctcoinUrl(".2") }),
    new CoinSettings(["Education", "Emulation"], { theme: "indigo" }, [], { url: this.getFctcoinUrl(".5") }),
    new CoinSettings(["Medicine"], { theme: "red" }, [], { url: this.getFctcoinUrl("10") }),
    new CoinSettings(["Holo Master"], { theme: "beige" }, [], { url: "https://quantumfunds.files.wordpress.com/2018/11/factom.png" }),
    new CoinSettings(["Technology", "Therapies", "Tunnels", "Tomography"], { theme: "turquoise" }, [], { url: this.getFctcoinUrl("1") }),
    new CoinSettings(["Art", "Applications", "Algorithm"], { theme: "orange" }, [], { url: this.getFctcoinUrl("5") }),
    new CoinSettings(["Smart", "Sustainability", "Systems", "Simulations"], { theme: "olive" }, [], { url: this.getFctcoinUrl("2") }),
  ]

  mods:Array<Mod> = [
    {name: "Big H", id:"bigh", postfix:"h"}
  ]
  selectedMod = this.mods[0];

  starMenuItems = [
    {name: "HolopediaLi", style: { top: "20px", left: "50%", transform: "translateX(-50%)"}},
    {name: "Medicine", style: { top: "64px", left: "calc(50% - 97px)", transform: "translateX(-100%)"}},
    {name: "Art", style: { top: "123px", left: "calc(50% - 190px)", transform: "translateX(-100%)"}},
    {name: "Applications", style: { top: "216px", left: "calc(50% - 246px)", transform: "translateX(-100%)"}},
    {name: "Algorithms", style: { top: "320px", left: "calc(50% - 266px)", transform: "translateX(-100%)"}},
    {name: "Smart", style: { top: "424px", left: "calc(50% - 246px)", transform: "translateX(-100%)"}},
    {name: "Sustainability", style: { top: "516px", left: "calc(50% - 190px)", transform: "translateX(-100%)"}},
    {name: "Systems", style: { top: "574px", left: "calc(50% - 97px)", transform: "translateX(-100%)"}},
    {name: "Simulations", style: { top: "624px", left: "50%", transform: "translateX(-50%)"}},
    {name: "Technology", style: { top: "574px", left: "calc(50% + 97px)"}},
    {name: "Therapies", style: { top: "516px", left: "calc(50% + 190px)"}},
    {name: "Tunnels", style: { top: "424px", left: "calc(50% + 246px)"}},
    {name: "Tomography", style: { top: "320px", left: "calc(50% + 266px)"}},
    {name: "Education", style: { top: "216px", left: "calc(50% + 246px)"}},
    {name: "Emulation", style: { top: "123px", left: "calc(50% + 190px)"}},
    {name: "Research", style: { top: "64px", left: "calc(50% + 97px)"}},
  ]
  



  starBgUrl: string;
  starIndex: number;
  currentStep: string;

  constructor(
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log('params', params);
      this.currentStep = (params.holo)? params.holo : "HolopediaLi";
      this.title = this.currentStep;
      this.description = (this.currentStep == "HolopediaLi")? this.defaultDescription: "";
    });

    
    setInterval(x => this.iterateStarBg(), 810);
  }

  iterateStarBg() {
    this.starIndex = (this.starIndex == 1)? 2: 1;
    this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_${this.selectedMod.postfix}_${this.starIndex}.png`;
  }

  getFctcoinUrl(value) {
    return `http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_${value}_512.png`;
  }

  getHexSide(settings: SideSettings, size) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

}
