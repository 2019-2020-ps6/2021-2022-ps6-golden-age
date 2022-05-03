/* tslint:disable:indent */
import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface RecommendedVoices {
  [key: string]: boolean;
}

@Component({
  selector: 'app-text-to-speech',
  styleUrls: [ './text-to-speech.component.scss' ],
  templateUrl: './text-to-speech.component.html'
})
export class TextToSpeechComponent {
  public user: User;
  public sayCommand: string;
  public recommendedVoices: RecommendedVoices;
  public rates: number[];
  public selectedVolume: number;
  public selectedRate: number;
  public selectedVoice: SpeechSynthesisVoice | null;
  public selectedVoiceIndex: number;
  public text: string;
  public voices: SpeechSynthesisVoice[];
  public mute: boolean;
  // I initialize the app component.
  constructor(public userService: UserService) {
    this.voices = [];
    this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
    this.selectedVoice = null;
    this.selectedRate = 1;
    this.selectedVolume = 1;
    // Dirty Dancing for the win!
    this.text = 'Me? ... I\'m scared of everything. I\'m scared of what I saw, of what I did, of who I am. And most of all, I\'m scared of walking out of this room and never feeling the rest of my whole life ... the way I feel when I\'m with you.';
    this.sayCommand = '';
    // These are "recommended" in so much as that these are the voices that I (Ben)
    // could understand most clearly.
    this.recommendedVoices = Object.create( null );
    this.recommendedVoices.Alex = true;
    this.recommendedVoices.Alva = true;
    this.recommendedVoices.Damayanti = true;
    this.recommendedVoices.Daniel = true;
    this.recommendedVoices.Fiona = true;
    this.recommendedVoices.Fred = true;
    this.recommendedVoices.Karen = true;
    this.recommendedVoices[ 'Mei-Jia' ] = true;
    this.recommendedVoices.Melina = true;
    this.recommendedVoices.Moira = true;
    this.recommendedVoices.Rishi = true;
    this.recommendedVoices.Samantha = true;
    this.recommendedVoices.Tessa = true;
    this.recommendedVoices.Veena = true;
    this.recommendedVoices.Victoria = true;
    this.recommendedVoices.Yuri = true;
  }
  // ---
  // PUBLIC METHODS.
  // ---
  // I demo the currently-selected voice.
  public demoSelectedVoice(): void {
    if ( ! this.selectedVoice ) {
      console.warn( 'Expected a voice, but none was selected.' );
      return;
    }
    const demoText = 'Never gonna give you up, never gonna let you down';

    this.stop();
    this.synthesizeSpeechFromText(this.selectedRate, demoText );
  }

  // I get called once after the inputs have been bound for the first time.
  // tslint:disable-next-line:use-lifecycle-interface
  public ngOnInit(): void {
    console.log('init', localStorage.getItem('user'));
    this.userService.setSelectedUser(parseInt(localStorage.getItem('user'), 10));
    this.userService.userSelected$.subscribe(u => {
      this.user = u;
    });
    this.voices = speechSynthesis.getVoices();
    this.selectedVoice = ( this.voices[ 0 ] || null );
    // this.updateSayCommand();
    // The voices aren't immediately available (or so it seems). As such, if no
    // voices came back, let's assume they haven't loaded yet and we need to wait for
    // the "voiceschanged" event to fire before we can access them.
    if ( ! this.voices.length ) {
      speechSynthesis.addEventListener(
        'voiceschanged',
        () => {
          this.voices = speechSynthesis.getVoices();
          this.selectedVoice = ( this.voices[ 0 ] || null );
        }
        );
    }
  }

  // // I synthesize speech from the current text for the currently-selected voice.
  // public speak(): void {
  //   if ( ! this.selectedVoice || ! this.text ) {
  //     return;
  //   }
  //   this.stop();
  //   this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, this.text );
  // }

  public say(line: string): void {

		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		this.stop();
		this.synthesizeSpeechFromText( this.selectedRate, line );

	}


  public changeVoice(): void{
    if ( ! this.selectedVoice ) {

			return;

		}

    this.user.voice = this.selectedVoiceIndex;
    this.userService.updateUser(this.user);

  }

  public switchMute(){
    this.mute = !this.mute;
    if(this.mute){
      this.user.volume = 0;
    }else{
      this.user.volume = 1;
    }

    this.userService.updateUser(this.user);

  }


	// I stop any current speech synthesis.
	public stop(): void {

		if ( speechSynthesis.speaking ) {

			speechSynthesis.cancel();

		}

	}


	// I update the "say" command that can be used to generate the a sound file from the
	// current speech synthesis configuration.
	// public updateSayCommand(): void {

	// 	if ( ! this.selectedVoice || ! this.text ) {

	// 		return;

	// 	}

	// 	// With the say command, the rate is the number of words-per-minute. As such, we
	// 	// have to finagle the SpeechSynthesis rate into something roughly equivalent for
	// 	// the terminal-based invocation.
	// 	const sanitizedRate = Math.floor( 200 * this.selectedRate );
	// 	const sanitizedText = this.text
	// 		.replace( /[\r\n]/g, ' ' )
	// 		.replace( /(["'\\\\/])/g, '\\$1' )
	// 	;

	// 	this.sayCommand = `say --voice ${ this.selectedVoice.name } --rate ${ sanitizedRate } --output-file=demo.aiff "${ sanitizedText }"`;

	// }

	// ---
	// PRIVATE METHODS.
	// ---

	// I perform the low-level speech synthesis for the given voice, rate, and text.
	private synthesizeSpeechFromText(
		// voice: SpeechSynthesisVoice,
		rate: number,
		text: string,
		): void {

    const utterance = new SpeechSynthesisUtterance( text );

    // utterance.voice = this.selectedVoice;
    utterance.voice = this.voices[this.user.voice];
    utterance.rate = rate;
    utterance.volume = this.user.volume;
    speechSynthesis.speak( utterance );

	}

}
