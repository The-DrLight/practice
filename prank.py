import tkinter as tk

# Function to create the popup window
def create_popup():
    # Create the root window
    root = tk.Tk()
    root.title("Non-dismissible Popup")
    
    # Set the dimensions of the window
    root.geometry("300x200")
    
    # Add a label to the window
    label = tk.Label(root, text="Hehe, reset your laptop.", font=("Helvetica", 12))
    label.pack(pady=50)
    
    # Disable the close button
    root.protocol("WM_DELETE_WINDOW", lambda: None)
    
    # Run the tkinter main loop
    root.mainloop()

# Call the function to create the popup
create_popup()
