import sys
import string
MAX_SIZE = 9
def get_key_matrix(key_file):
 try:
 with open(key_file, 'r') as f:
 key_size = int(f.readline().strip())
 if key_size < 2 or key_size > MAX_SIZE:
 print("Invalid key size", file=sys.stdout)
 sys.exit(1)
 matrix = []
 for _ in range(key_size):
 row = list(map(int, f.readline().strip().split()))
 matrix.append(row)
 return matrix
 except FileNotFoundError:
 print("File not found.", file=sys.stdout)
 sys.exit(1)
 except ValueError:
 print("Invalid input in key file.", file=sys.stdout)
 sys.exit(1)
def extract_letters(plaintext_file, key_size):
 letters = []
 with open(plaintext_file, 'r', encoding='utf-8') as file:
 for line in file:
 for char in line:
 if char.isalpha():
 letters.append(char.lower())
 # Padding with 'x' char if needed
 pad_len = key_size - (len(letters) % key_size)
 letters += ['x'] * pad_len
 return ''.join(letters)
def encrypt(plaintext, key_size, key_matrix):
 ciphertext = ""
 for i in range(0, len(plaintext), key_size):
 block = plaintext[i:i + key_size]
 for j in range(key_size):
 total = 0
 for k in range(key_size):
 total += key_matrix[j][k] * (ord(block[k]) - ord('a'))
 total %= 26
 ciphertext += chr(total + ord('a'))
 return ciphertext
def format_output(text, width=80):

 for i in range(0, len(text), width):
 print(text[i:i + width])
if __name__ == "__main__":
 if len(sys.argv) != 3:
 print("Usage: python pa01.py <key_file> <plaintext_file>", file=sys.stdout)
 sys.exit(1)
 key_filename = sys.argv[1]
 plaintext_filename = sys.argv[2]
 key_matrix = get_key_matrix(key_filename)
 plaintext = extract_letters(plaintext_filename, len(key_matrix))
 print("\nKey matrix:", file=sys.stdout)
 for row in key_matrix:
 print(' '.join(map(str, row)), file=sys.stdout)
 print("\nPlaintext:", file=sys.stdout)
 format_output(plaintext)
 ciphertext = encrypt(plaintext, len(key_matrix), key_matrix)
 print("\nCiphertext:", file=sys.stdout)
 format_output(ciphertext)