# Function to read input from a file and perform some operation
def process_input(input_file):
    with open(input_file, 'r') as f:
        lines = f.readlines()
        # Example operation: print each line
        for line in lines:
            print(line.strip())  # Strip newline characters

# Call the function with input file
if __name__ == "__main__":
    input_file = 'input.txt'  # Specify the input file path
    process_input(input_file)
