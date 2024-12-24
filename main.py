def heart():
    while run_function == 3:
        basic.show_icon(IconNames.HEART)
        basic.pause(1000)
        turn_off()

def on_button_pressed_a():
    global run_function
    if run_function == 3:
        run_function = 1
    else:
        run_function += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def turn_off():
    basic.clear_screen()
    basic.pause(100)
def smile():
    while run_function == 2:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
        turn_off()
def cross():
    while run_function == 1:
        basic.show_icon(IconNames.NO)
        basic.pause(1000)
        turn_off()

def on_button_pressed_b():
    global run_function
    if run_function > 0:
        run_function = 0
    else:
        run_function = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

run_function = 0
run_function = 1

def on_forever():
    cross()
    heart()
    smile()
basic.forever(on_forever)
