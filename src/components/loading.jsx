import { Component } from "react";

class load extends Component {

    render(){
        return (
            <section class="grid gap-4 md:gap-6 lg:gap-8 items-start grid-cols-cards" id="events-container">
            <div class="flex gap-3 items-center text-blue-500 mx-auto">
              <svg class="animate-spin h-8 w-8" width="20" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="opacity-25" cx="77.5" cy="77.5" r="60" stroke="currentColor" stroke-width="10" />
                <path d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" class="opacity-75" stroke="currentColor" stroke-width="10" />
              </svg>
              <p class="text-center text-3xl animate-pulse">Loading Events</p>
            </div>
          </section>
        );
    }
}
export default load;