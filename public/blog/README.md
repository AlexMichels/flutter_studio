# Flutter blog for scalable flutter development

the current index.html text content is just a placeholder. replace all text but keep the design untouched.
replace also the images with the images from the image_folder
- add those two youtube videos 1. project strucutre overview https://youtu.be/-IqHOFh7yrk
and how to strucuture features https://youtu.be/HQoJH3s9hDs

-- content:
## Recommended Project Structure

> That is a great way to structure the codebase
> 

![image.png](attachment:9374eaa9-0df8-46de-a599-86bd18c81124:image.png)

### What is a Feature?

When we focus on the UI, we're likely to think of a feature **as a single page** or screen in the app.

That is wrong.

A Feature is not about what the user **sees**, but what the user **does**:

- authenticate
- manage the shopping cart
- checkout
- view all past orders
- leave a review

Feautures should not depend on each other. They are build like

a plugin

### Feature Folder Structure

> Replace “example” with your Feature name.
> 

![image.png](attachment:ed540468-ad27-48fd-836b-207e6ae6d757:image.png)

### **Unidirectional Data Flow**

Unidirectional data flow is a pattern where data moves in a single direction through your app: from data sources (repositories) → business logic (services) → state management (controllers) → UI. 

**Repository**  → handles api calls, remote data connections with servers, local persistence etc. 

**Service** → can use repository to fetch, write or listen. Services can use one or more repositories 

**Controller** → ****are handlings the state of the Ui. Controller can use Services

**Widgets** → should not have business logic or state logic and should be easy to understand and around 100-120 lines of code long.  Always use stateless widgets instead of helper methods

### Riverpod

Riverpod serves as the glue between our layers. We use regular Providers for repositories and 

services. Services can also leverage StreamProviders and FutureProviders. The controller is 

implemented as an (Async)Notifier. The UI typically watches the controller’s state and uses its

 methods. Additionally, the UI can directly watch StreamProviders if doing so reduces boilerplate

 code.

### Error handling

We generally using try catch blocks in the Service Layer.

We can also use AsyncValue.guard if it make sense.

in the catch blog we use the logging class to give useful feedback and

track error and stack trace. The logging is again connected with the

error tracking tool and that allows us to improve debugging and get the information

when errors or exception occurs. 

We do not need to track simple exceptions like missing internet connection or wrong

password inputs. only exceptions which are of interest for debugging.

We generally use try-catch blocks in the Service Layer to manage errors. 

Where appropriate, we can also use AsyncValue.guard. 

In the catch block, we utilize the logging class to provide useful feedback and track errors along with their stack traces. 

The logging system is integrated with Sentry / Crashlytics, which helps understanding and fixing bugs in production and during QC testing. 

We don’t need to log unimportant  exceptions like missing internet connections or incorrect password inputs—only those relevant to debugging should be tracked.

### Learn more

I recommend [this article](https://codewithandrea.com/articles/flutter-app-architecture-riverpod-introduction/)