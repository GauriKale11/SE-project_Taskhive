import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: 'black'}}>
      <p>Dashboard page</p>

      <div className="p-6 pt-0">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-left h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <div style={{opacity: 1}}>
                <button
                  className="inline-flex items-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-[110px] sm:w-[151px] justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground p-2 sm:p-2 font-semibold text-sm sm:text-lg"
                  role="combobox"
                  aria-expanded="false"
                  aria-label="Pick a date"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="radix-:r3:"
                  data-state="closed"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden sm:inline-block mr-2 h-4 w-4"
                  >
                    <path
                      d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p
                    className="text-xs sm:text-sm flex-grow text-center"
                    style={{opacity: 1, transform: 'none'}}
                  >
                    September
                  </p>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden sm:inline-block ml-2 h-4 w-4 shrink-0 opacity-50"
                  >
                    <path
                      d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div style={{opacity: 1}}>
                <button
                  className="inline-flex items-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-[70px] sm:w-[71px] justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground p-2 sm:p-2 font-semibold text-sm sm:text-lg"
                  role="combobox"
                  aria-expanded="false"
                  aria-label="Select a year"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="radix-:r7:"
                  data-state="closed"
                >
                  <p
                    className="text-xs sm:text-sm"
                    style={{opacity: 1, transform: 'none'}}
                  >
                    2025
                  </p>
                </button>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              <button className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-1 w-20 justify-center overflow-hidden">
                <div
                  className="flex items-center space-x-1"
                  style={{opacity: 1, transform: 'none'}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock h-4 w-4 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-xs font-medium">24h</span>
                </div>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-20 overflow-hidden"
                type="button"
                id="radix-:rb:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <div
                  className="flex items-center space-x-1"
                  style={{opacity: 1, transform: 'none'}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-filter h-4 w-4 flex-shrink-0"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <span className="text-xs font-medium">Filter</span>
                </div>
              </button>
              <button
                className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 flex items-center space-x-1 w-28 h-10 justify-center overflow-hidden"
                disabled=""
              >
                <div
                  className="flex items-center space-x-1"
                  style={{opacity: 1}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-calendar h-4 w-4 flex-shrink-0"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>This Month</span>
                </div>
              </button>
              <button
                className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 flex items-center space-x-1 w-10 h-10 justify-center overflow-hidden"
                data-state="closed"
              >
                <div
                  className="flex items-center space-x-1"
                  style={{opacity: 1, transform: 'none'}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-list-checks h-4 w-4"
                  >
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                    <path d="M13 6h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 18h8"></path>
                  </svg>
                </div>
              </button>

              <div className="inline-flex items-center rounded-md border border-input bg-transparent p-1 w-full sm:w-[240px]">
                <div
                  className="relative flex-grow"
                  data-state="closed"
                  style={{flex: '1 1 0%'}}
                >
                  <button className="cal-menu-icons">
                    <div className="flex items-center justify-center space-x-1 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-list h-4 w-4 flex-shrink-0 text-muted-foreground"
                      >
                        <path d="M3 12h.01"></path>
                        <path d="M3 18h.01"></path>
                        <path d="M3 6h.01"></path>
                        <path d="M8 12h13"></path>
                        <path d="M8 18h13"></path>
                        <path d="M8 6h13"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className="relative flex-grow"
                  data-state="closed"
                  style={{flex: '1 1 0%'}}
                >
                  <button className="cal-menu-icons">
                    <div className="flex items-center justify-center space-x-1 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-columns2 h-4 w-4 flex-shrink-0 text-muted-foreground"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M12 3v18"></path>
                      </svg>
                    </div>
                    
                  </button>
                </div>
                <div
                  className="relative flex-grow"
                  data-state="closed"
                  style={{flex: '2 1 0%'}}
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 rounded-md px-3 relative h-8 w-full overflow-hidden transition-colors bg-secondary text-secondary-foreground">
                    <div className="flex items-center justify-center space-x-1 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-grid3x3 h-4 w-4 flex-shrink-0 text-primary"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M3 15h18"></path>
                        <path d="M9 3v18"></path>
                        <path d="M15 3v18"></path>
                      </svg>
                      <span
                        className="text-xs font-medium whitespace-nowrap overflow-hidden"
                        style={{opacity: 1, width: 'auto'}}
                      >
                        Month
                      </span>
                    </div>
                  </button>
                </div>
                <div
                  className="relative flex-grow"
                  data-state="closed"
                  style={{flex: '1 1 0%'}}
                >
                  <button className="cal-menu-icons">
                    <div className="flex items-center justify-center space-x-1 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-layout-grid h-4 w-4 flex-shrink-0 text-muted-foreground"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>

                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              <button
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full gap-0 sm:w-auto text-xs sm:text-sm"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rm:"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-plus h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
                  <path d="M3 10h18"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                </svg>
                Add Event
              </button>
            </div>
          </div>
          <div className="h-full" style={{opacity: 1, transform: 'none'}}>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-2 sm:p-4">
              <div
                dir="ltr"
                className="relative overflow-hidden"
                style={{position: 'relative', '--radix-scroll-area-corner-width': '0px','--radix-scroll-area-corner-height': '0px'}}
              >
                {/* <style>[data-radix-scroll-area-viewport]{scrollbar - width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}
            </style> */}

                <div
                  data-radix-scroll-area-viewport=""
                  className="h-full w-full rounded-[inherit]"
                  style={{overflowX: 'hidden', overflowY: 'scroll'}}
                >
                  <div style={{minWidth: '100%', display: 'table'}}>
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">

                      {/* Day-Grid */}
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Mon
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Tue
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Wed
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Thu
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Fri
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Sat
                      </div>
                      <div className="text-center font-medium text-xs sm:text-sm">
                        Sun
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          1
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rs1:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>


                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          2
                        </div>

                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rs4:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          3
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rs7:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Meeting A
                              </div>
                              <div className="hidden sm:block truncate">
                                10:00 - 11:30
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rsa:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+2</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          4
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rsd:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          5
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rsg:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          6
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rsj:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          7
                        </div>

                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rsm:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                All-Day Project Sprint
                              </div>
                              <div className="hidden sm:block truncate">
                                00:00 - 23:59
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md w-full gap-1 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground mt-auto sm:mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity truncate px-0.5 sm:px-2"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rsp:"
                          data-state="closed"
                        >
                          <span className="font-bold">+</span>
                          <span className="hidden sm:inline">Add Event</span>
                        </button>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          8
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rss:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          9
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none' }}>
                            <div
                              className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rsv:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                International Client Call
                              </div>
                              <div className="hidden sm:block truncate">
                                03:00 - 04:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rt2:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+1</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          10
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rt5:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Workshop A
                              </div>
                              <div className="hidden sm:block truncate">
                                14:00 - 16:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rt8:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+2</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          11
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rtb:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          12
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rte:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Product Development Workshop
                              </div>
                              <div className="hidden sm:block truncate">
                                01:00 - 05:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md w-full gap-1 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground mt-auto sm:mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity truncate px-0.5 sm:px-2"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rth:"
                          data-state="closed"
                        >
                          <span className="font-bold">+</span>
                          <span className="hidden sm:inline">Add Event</span>
                        </button>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          13
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rtk:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          14
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rtn:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          15
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rtq:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Investor Presentation
                              </div>
                              <div className="hidden sm:block truncate">
                                06:30 - 08:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rtt:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+1</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          16
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:ru0:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          17
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:ru3:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Team Breakfast
                              </div>
                              <div className="hidden sm:block truncate">
                                07:00 - 08:30
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md w-full gap-1 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground mt-auto sm:mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity truncate px-0.5 sm:px-2"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:ru6:"
                          data-state="closed"
                        >
                          <span className="font-bold">+</span>
                          <span className="hidden sm:inline">Add Event</span>
                        </button>
                      </div>

                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          18
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:ru9:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          19
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:ruc:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Asia Market Review
                              </div>
                              <div className="hidden sm:block truncate">
                                01:00 - 03:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:ruf:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+5</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          20
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rui:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Early Strategy Meeting
                              </div>
                              <div className="hidden sm:block truncate">
                                02:00 - 04:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rul:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+3</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          21
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:ruo:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          22
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rur:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Product Launch
                              </div>
                              <div className="hidden sm:block truncate">
                                10:00 - 12:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:ruu:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+1</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          23
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rv1:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          24
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rv4:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Conference A
                              </div>
                              <div className="hidden sm:block truncate">
                                13:00 - 15:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rv7:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+2</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          25
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 "
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rva:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Training Session
                              </div>
                              <div className="hidden sm:block truncate">
                                14:00 - 17:00
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md w-full gap-1 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground mt-auto sm:mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity truncate px-0.5 sm:px-2"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rvd:"
                          data-state="closed"
                        >
                          <span className="font-bold">+</span>
                          <span className="hidden sm:inline">Add Event</span>
                        </button>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          26
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <button
                            className="add-task-btn"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:rvg:"
                            data-state="closed"
                          >
                            <span className="hidden sm:inline ml-1">
                              Add Event
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          27
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 p-1  border-l-4 border-l-black/70 dark:border-l-white/50"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rvj:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Ads Campaign Nr2
                              </div>
                              <div className="hidden sm:block truncate">
                                <div className="truncate">
                                  AdSense + FB, Target Audience: SMB2-Delta3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md w-full gap-1 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground mt-auto sm:mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity truncate px-0.5 sm:px-2"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rvm:"
                          data-state="closed"
                        >
                          <span className="font-bold">+</span>
                          <span className="hidden sm:inline">Add Event</span>
                        </button>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm bg-primary text-primary-foreground rounded-full">
                          28
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 p-1  border-x-0"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rvp:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Ads Campaign Nr2
                              </div>
                              <div className="hidden sm:block truncate">
                                <div className="truncate">
                                  AdSense + FB, Target Audience: SMB2-Delta3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rvs:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+6</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          29
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 p-1  border-x-0"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rvv:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Ads Campaign Nr2
                              </div>
                              <div className="hidden sm:block truncate">
                                <div className="truncate">
                                  AdSense + FB, Target Audience: SMB2-Delta3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r102:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+1</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col">
                        <div className="font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                          30
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <div style={{opacity: 1, transform: 'none'}}>
                            <div
                              className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 p-1  border-x-0"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:r105:"
                              data-state="closed"
                            >
                              <div className="font-semibold truncate">
                                Ads Campaign Nr2
                              </div>
                              <div className="hidden sm:block truncate">
                                <div className="truncate">
                                  AdSense + FB, Target Audience: SMB2-Delta3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r108:"
                          data-state="closed"
                          style={{opacity: 1, transform: 'none'}}
                        >
                          <button className="task-extra-info">
                            <span>+1</span>
                            <span className="hidden sm:inline"> more</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
