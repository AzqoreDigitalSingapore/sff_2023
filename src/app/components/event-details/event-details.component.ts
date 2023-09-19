import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EVENTS } from '../../mock/mock-events';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Speaker } from 'src/app/models/speaker';
import { SPEAKERS } from 'src/app/mock/mock-speakers';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  events: Event[] = EVENTS;
  speakers: Speaker[] = SPEAKERS;
  constructor(private route: ActivatedRoute, private loader: LoaderService) { }
  ngOnInit(): void {
    this.getEvent();
  }
  selectedEvent?: Event;
  speaker?: Speaker
  getEvent(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEvent = this.events.find(i => i.id === id);
    this.getSpeaker();
    this.loader.setLoading(false);
  }
  getSpeaker(): void {
    this.loader.setLoading(true);
    const id = this.selectedEvent?.speakerId;
    this.speaker = this.speakers.find(i => i.id === id);
    this.loader.setLoading(false);
  }
}