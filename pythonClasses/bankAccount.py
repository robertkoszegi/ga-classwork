
import random

class BankAccount():
    def __init__(self, owner, balance = 0, has_overdraft = False):
        self.owner = owner
        self.balance = balance
        self.account_no = random.randint(111111111, 999999999)
        self.has_overdraft = has_overdraft
    
    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance and self.has_overdraft == False:
            print('Insufficient funds')
        else:
            self.balance -= amount
            return self.balance

    def __str__(self):
        return f'Name: {self.owner} Account: {self.account_no}, Balance: {self.balance}'




# bobStanford = BankAccount('Bob Stanford', 500)
# print(bobStanford)
# bobStanford.withdraw(50)
# print(bobStanford)
# bobStanford.deposit(75)
# print(bobStanford)


# class SavingsAccount(BankAccount):
#     def __init__(self, owner, balance):
#         BankAccount.__init__(self, owner, balance)
    
#     def withdraw(self, amount):
#         print (f'No withdrawals permitted.')

# janeDoe = SavingsAccount('Jane Doe', 1000)
# janeDoe.withdraw(50)
# print(janeDoe)

steveJenkins = BankAccount('Steve Jenkins', 20)
print(steveJenkins)
steveJenkins.withdraw(50)
steveJenkins.withdraw(10)
print(steveJenkins)

