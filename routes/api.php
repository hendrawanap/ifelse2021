<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PendataanController;
use App\Http\Controllers\PerizinanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Models\Agenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->post('login', [AuthController::class, 'login']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user('api');
});

Route::get('/agenda', function(){
    return Agenda::all();
});

//Route::get('/seedstudent', [StudentController::class, 'seedStudent']);
Route::get('/clear-cache3254362346', function(){
    Artisan::call('route:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    return (['data'=>'succeeded']);
});

//Route::get('/insertadmin-aiusfoiaeshfoidskjlvads', [StudentController::class, 'insertAdmin']);

Route::get('/news', [NewsController::class, 'getPublished']);
Route::get('/news/{id}', [NewsController::class, 'show']);

Route::group(['middleware' => 'auth:api'], function(){
    // Users
    Route::get('/loggedIn', function (){
        return response()->json(['status'=>'loggedIn']);
    });
});

Route::group(['middleware' => 'auth:api'], function(){
    // Users
    Route::get('/quiz', [QuizController::class, 'all'])->middleware('role:student');
    Route::get('/quiz/start/{id}', [QuizController::class, 'beginQuiz'])->middleware('role:student');
    // Submit Current Answers
    Route::post('/quiz/submit/{id}', [QuizController::class, 'submitAnswers'])->middleware('role:student');

    // Check Time Every 5 Seconds
    Route::get('/quiz/time/{id}', [QuizController::class, 'getRemainingTime'])->middleware('role:student');

    Route::get('/quiz/questions/{id}', [QuizController::class, 'getQuestions'])->middleware('role:student');
    Route::get('/quiz/finish/{id}', [QuizController::class, 'finishQuiz'])->middleware('role:student');
    Route::get('/profile', [ProfileController::class, 'index'])->middleware('role:student');

    Route::post('/profile/contact', [ProfileController::class, 'changeContact'])->middleware('role:student');
    Route::get('/profile/agendas', [ProfileController::class, 'getAgendas'])->middleware('role:student');
    Route::post('/profile/picture', [ProfileController::class, 'changePicture'])->middleware('role:student');
    Route::get('/profile/graduation', [ProfileController::class, 'getGraduation'])->middleware('role:student');

    Route::get('/attendances', [AttendanceController::class, 'hasAttendance'])->middleware('role:student');
    Route::get('/attendances/submit', [AttendanceController::class, 'attend'])->middleware('role:student');

    Route::get('/pendataan', [StudentController::class, 'showPendataan'])->middleware('role:student');
    Route::get('/pendataan/{id}', [StudentController::class, 'showOnePendataan'])->middleware('role:student');
    Route::post('/pendataan/{id}', [StudentController::class, 'postPendataan'])->middleware('role:student');

    Route::get('/perizinan', [StudentController::class, 'showPerizinan'])->middleware('role:student');
    Route::get('/perizinan/{id}', [StudentController::class, 'showOnePerizinan'])->middleware('role:student');
    Route::post('/perizinan/{id}', [StudentController::class, 'postPerizinan'])->middleware('role:student');


    Route::post('/user/password', [UserController::class, 'passwordChange']);
    Route::get('/tasks',[StudentController::class, 'tasks']);
    Route::get('/tasks/{id}',[StudentController::class, 'getTask']);
    Route::post('/tasks/{id}', [StudentController::class, 'storeTask']);

});

Route::get('/some-awesome-credentials/make/{role}/{username}/{password}/{name}', [AdminController::class, 'addUser']);

// Admin
Route::group(['middleware' => 'auth:api'], function(){
    Route::get('/admin/quiz/', [QuizController::class, 'getAllQuiz'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/quiz/add', [QuizController::class, 'addQuiz'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/quiz/toggle/{id}', [QuizController::class, 'togglePublish'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/quiz/questions', [QuizController::class, 'getAllQuestions'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/quiz/questions/add', [QuizController::class, 'addQuestion'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/quiz/questions/remove', [QuizController::class, 'removeQuestions'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/quiz/info', [QuizController::class, 'getQuizSummary'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/quiz/{id}', [QuizController::class, 'getQuizInformation'])->middleware('role:admin,quality evaluator');

    Route::get('/admin/berita/', [NewsController::class, 'getAllNews'])->middleware('role:admin,humas');
    Route::post('/admin/berita/add', [NewsController::class, 'aksiTambah'])->middleware('role:admin,humas');
    Route::get('/admin/berita/edit/{id}', [NewsController::class, 'edit'])->middleware('role:admin,humas');
    Route::post('/admin/berita/ubah/{id}', [NewsController::class, 'update'])->middleware('role:admin,humas');
    Route::post('/admin/berita/status', [NewsController::class, 'toggleStatus'])->middleware('role:admin,humas');


    Route::get('/admin/pendataan', [PendataanController::class, 'getPendataan'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/pendataan/{id}', [PendataanController::class, 'showOne'])->middleware('role:admin,quality evaluator');

    Route::get('/admin/perizinan', [PerizinanController::class, 'show'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/perizinan/{id}', [PerizinanController::class, 'showOne'])->middleware('role:admin,quality evaluator');


    Route::post('/admin/pendataan/update/{id}', [PendataanController::class, 'updatePendataan'])->middleware('role:admin,quality evaluator');

    Route::get('/admin/groups', [AdminController::class, 'getGroups'])->middleware('role:admin,quality evaluator,pendamping');
    Route::get('/admin/groups/companions/{id}', [AdminController::class, 'getGroupCompanion'])->middleware('role:admin,quality evaluator,pendamping');
    Route::get('/admin/groups/students/{id}', [AdminController::class, 'getGroupStudents'])->middleware('role:admin,quality evaluator,pendamping');
    Route::post('/admin/groups/add', [AdminController::class, 'storeGroup'])->middleware('role:admin,quality evaluator,pendamping');
    Route::post('/admin/groups/edit/{id}', [AdminController::class, 'updateGroup'])->middleware('role:admin,quality evaluator,pendamping');
    Route::get('/admin/groups/{id}', [AdminController::class, 'getGroupById'])->middleware('role:admin,quality evaluator,pendamping');

    Route::get('/admin/students', [AdminController::class, 'getStudents'])->middleware('role:admin,quality evaluator,pendamping');
    Route::post('/admin/students/add', [AdminController::class, 'addStudent'])->middleware('role:admin,quality evaluator,pendamping');
    Route::get('/admin/students/{id}', [StudentController::class, 'getStudent'])->middleware('role:admin,quality evaluator,pendamping');

    Route::get('/admin/attendances', [AttendanceController::class, 'index'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/attendances/add', [AttendanceController::class, 'store'])->middleware('role:admin,quality evaluator');
    Route::post('/admin/attendances/status', [AttendanceController::class, 'toggleStatus'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/attendances/{id}', [AttendanceController::class, 'show'])->middleware('role:admin,quality evaluator');

    Route::get('/admin/tasks', [TaskController::class, 'index'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/tasks/publish/{id}', [TaskController::class, 'togglePublish'])->middleware('role:admin,quality evaluator');
    Route::get('/admin/tasks/{id}', [TaskController::class, 'show'])->middleware('role:admin,quality evaluator');

    Route::post('/admin/tasks/add', [TaskController::class, 'store'])->middleware('role:admin,quality evaluator');


    Route::get('/admin/agenda', [AgendaController::class, 'index'])->middleware('role:admin,quality evaluator,pendamping,humas');

});

