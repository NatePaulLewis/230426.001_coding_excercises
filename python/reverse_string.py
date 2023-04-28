class String:
    def __init__(self, input_string):
        self.input_string = input_string

    def reverseString(self):
        reverse_string_list = []

        for i in self.input_string:
            reverse_string_list.append(i)
        reverse_string_list.reverse()
        return ''.join(reverse_string_list)


my_string = 'hello world'

reverse = String(my_string)
print(reverse.reverseString())

